import React from 'react';
import {act} from '@testing-library/react';
import ReactPortal from './ReactPortal';


import {createRoot, Root} from 'react-dom/client';


let container: HTMLDivElement|null = null;
let root: Root|null = null;

beforeEach(() => {
    // 設置 DOM 元素作為渲染目標
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
});

afterEach(() => {
    // 渲染測試結束後清理
    if (root) {
        root.unmount();
    }
    if (container) {
        container.remove();
        container = null;
    }
});

it('renders content in a portal', () => {
    const parentElement = document.createElement('div');
    parentElement.id = 'root';
    document.body.appendChild(parentElement);

    const parentSelector = () => parentElement;

    act(() => {
        root?.render(<div>
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


    const portalA = parentElement.querySelector('#portalA');
    const portalB = parentElement.querySelector('#portalB');

    expect(portalA?.textContent).toBe('Portal Content1');
    expect(portalB?.textContent).toBe('Portal Content2_1');
    expect(parentElement.querySelectorAll('#portalB').length).toBe(2);

    act(() => {
        if(root){
            root.unmount();
        }
    });

    expect(parentElement.querySelector('#test-portal')).toBeFalsy();
    document.body.removeChild(parentElement);
});
