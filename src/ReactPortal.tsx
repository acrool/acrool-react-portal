import React from 'react';
import ReactDOM from 'react-dom';
import {TSelector} from './types';



interface IProps{
    id: string
    className?: string
    children: React.ReactNode
    parentSelector: TSelector
}

interface IState {}

/**
 * 將內容傳送到外部Body內的方法
 */
class ReactPortal extends React.Component<IProps, IState> {
    _el: HTMLElement;

    static defaultProps = {
        parentSelector: () => document.getElementById('root'),
    };


    constructor(props: IProps) {
        super(props);
        const el = document.createElement('div');
        el.id = props.id;
        if(props.className){
            el.className = props.className;
        }
        this._el = el;
    }

    componentDidMount() {
        const parent = this.props.parentSelector();
        if(parent){
            parent.appendChild(this._el);
        }
    }

    componentWillUnmount() {
        const parent = this.props.parentSelector();
        if(parent){
            parent.removeChild(this._el);
        }
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
