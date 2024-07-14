import React from 'react';
import {act} from '@testing-library/react';
import ReactPortal from './ReactPortal';


import {createRoot} from 'react-dom/client';


let container = null;
let root = null;

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
    document.body.appendChild(parentElement);

    const parentSelector = () => parentElement;

    act(() => {
        root.render(
            <ReactPortal id="test-portal" parentSelector={parentSelector}>
                <div>Portal Content</div>
            </ReactPortal>
        );
    });

    expect(parentElement.querySelector('#test-portal')).toBeTruthy();
    expect(parentElement.querySelector('#test-portal').textContent).toBe('Portal Content');

    act(() => {
        root.unmount();
    });

    expect(parentElement.querySelector('#test-portal')).toBeFalsy();
    document.body.removeChild(parentElement);
});
