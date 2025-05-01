import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import * as CSS from 'csstype';
import { objectKeys } from './utils';

interface IProps {
    id: string
    className?: string
    style?: CSS.Properties
    children: React.ReactNode
    containerSelector?: () => HTMLElement | null
}

/**
 * 將內容傳送到外部Body內的方法
 */
const ReactPortal: React.FC<IProps> = ({
    id,
    className,
    style,
    children,
    containerSelector = () => document.body
}) => {
    const elRef = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // 创建元素
        const el = document.createElement('div');
        el.id = id;
        if (className) {
            el.className = className;
        }
        if (style) {
            objectKeys(style).forEach(key => {
                el.style[key] = style?.[key];
            });
        }
        elRef.current = el;

        // 添加到容器
        const container = containerSelector();
        if (container) {
            container.appendChild(el);
            setMounted(true);
        }

        // 清理函数
        return () => {
            if (elRef.current) {
                const container = containerSelector();
                if (container && container.contains(elRef.current)) {
                    container.removeChild(elRef.current);
                }
                elRef.current = null;
            }
            setMounted(false);
        };
    }, [id, className, style, containerSelector]);

    // 在服务器端渲染时返回 null
    if (typeof window === 'undefined' || !mounted || !elRef.current) {
        return null;
    }

    return ReactDOM.createPortal(
        children,
        elRef.current
    );
};

export default ReactPortal;
