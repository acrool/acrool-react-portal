import React from 'react';
import {act} from '@testing-library/react';
import ReactPortal from './ReactPortal';
import {createRoot, Root} from 'react-dom/client';

let container: HTMLDivElement|null = null;
let root: Root|null = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
});

afterEach(() => {
    act(() => {
        if (root) {
            root.unmount();
        }
    });
    if (container) {
        container.remove();
        container = null;
    }
});

it('renders content in a portal', async () => {
    const parentElement = document.createElement('div');
    parentElement.id = 'root';
    document.body.appendChild(parentElement);

    await act(async () => {
        root?.render(
            <div>
                <ReactPortal id="portalA" containerSelector={() => document.getElementById('root')}>
                    <div>Portal Content1</div>
                </ReactPortal>

                <ReactPortal id="portalB" containerSelector={() => document.getElementById('root')}>
                    <div>Portal Content2_1</div>
                </ReactPortal>
                <ReactPortal id="portalB" containerSelector={() => document.getElementById('root')}>
                    <div>Portal Content2_2</div>
                </ReactPortal>
            </div>
        );
    });

    // 等待下一个事件循环，确保 Portal 已经渲染
    await new Promise(resolve => setTimeout(resolve, 0));

    // 验证 portalA 的内容
    const portalA = parentElement.querySelector('#portalA');
    expect(portalA).toBeTruthy();
    expect(portalA?.textContent).toBe('Portal Content1');

    // 验证 portalB 的内容
    const portalB = parentElement.querySelector('#portalB');
    expect(portalB).toBeTruthy();
    expect(portalB?.textContent).toBe('Portal Content2_1');

    // 验证 portalB 的数量
    const portalBList = parentElement.querySelectorAll('#portalB');
    expect(portalBList.length).toBe(2);

    // 清理
    await act(async () => {
        if(root){
            root.unmount();
        }
    });

    // 验证清理后的状态
    expect(parentElement.querySelector('#portalA')).toBeFalsy();
    expect(parentElement.querySelector('#portalB')).toBeFalsy();
    document.body.removeChild(parentElement);
});
