import {IPortalProps} from './types';

/**
 * Object.keys 型別增強
 * @param object
 */
export function objectKeys<T extends object>(object: T): Array<keyof T> {
    return Object.keys(object) as Array<keyof T>;
}

export function createDiv (props: IPortalProps): HTMLElement {
    const el = document.createElement('div');
    el.id = props.id;
    if(props.className){
        el.className = props.className;
    }
    if(props.style){
        objectKeys(props.style).forEach(key => {
            el.style[key] = props.style?.[key];
        });
    }
    return el;
}
