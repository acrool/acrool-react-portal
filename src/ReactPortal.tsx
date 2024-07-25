import React from 'react';
import ReactDOM from 'react-dom';



interface IProps{
    id: string
    className?: string
    children: React.ReactNode
    containerId?: string

}

interface IState {}

/**
 * 將內容傳送到外部Body內的方法
 */
class ReactPortal extends React.Component<IProps, IState> {
    _el: HTMLElement;

    static defaultProps = {
        containerId: 'root'
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
        this._el = el;
    }

    componentDidMount() {
        const container = document.getElementById(this.typeProps.containerId);
        container?.appendChild(this._el);
    }

    componentWillUnmount() {
        const container = document.getElementById(this.typeProps.containerId);
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
