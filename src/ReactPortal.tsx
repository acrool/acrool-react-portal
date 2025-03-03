import React from 'react';
import ReactDOM from 'react-dom';
import * as CSS from 'csstype';
import {objectKeys} from './utils';



interface IProps{
    id: string
    className?: string
    style?: CSS.Properties
    children: React.ReactNode
    containerSelector?: () => HTMLElement|null

}

interface IState {}

/**
 * 將內容傳送到外部Body內的方法
 */
class ReactPortal extends React.Component<IProps, IState> {
    _el: HTMLElement;

    static defaultProps = {
        containerSelector: () => document.body,
    };

    get typeProps(){
        return this.props as IProps & typeof ReactPortal.defaultProps;
    }


    constructor(props: IProps) {
        super(props);
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
        this._el = el;
    }

    componentDidMount() {
        const container = this.typeProps.containerSelector();
        container?.appendChild(this._el);
    }

    componentWillUnmount() {
        const container = this.typeProps.containerSelector();
        container?.removeChild(this._el);
    }



    renderPortal = (): React.ReactPortal => {
        return ReactDOM.createPortal(
            this.props.children,
            this._el,
        );
    };


    render() {
        return this.renderPortal();
    }

}

export default ReactPortal;
