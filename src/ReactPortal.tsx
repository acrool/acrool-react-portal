import React from 'react';
import ReactDOM from 'react-dom';

import {IPortalProps} from './types';
import {createDiv} from './utils';



interface IState {}

/**
 * 將內容傳送到外部Body內的方法
 */
class ReactPortal extends React.Component<IPortalProps, IState> {
    _el: HTMLElement|null = null;

    static defaultProps = {
        containerSelector: () => document.body,
    };

    get typeProps(){
        return this.props as IPortalProps & typeof ReactPortal.defaultProps;
    }


    constructor(props: IPortalProps) {
        super(props);

        if (typeof window === 'undefined') return;
        this._el = createDiv(props);
    }

    componentDidMount() {
        this._el = this._el ? this._el: createDiv(this.props);

        const container = this.typeProps.containerSelector();
        container?.appendChild(this._el);
    }

    componentWillUnmount() {
        if(!this._el) return;
        const container = this.typeProps.containerSelector();
        container?.removeChild(this._el);
    }



    renderPortal = (): React.ReactPortal|null => {
        if(!this._el) return null;

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
