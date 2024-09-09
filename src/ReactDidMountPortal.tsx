import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';



interface IProps {
    children: React.ReactNode;
    selector?: () => HTMLElement;
}

/**
 * 傳送到目標 (不進行創建)
 */
const ReactDidMountPortal = ({
    children,
    selector = () => document.body,
}: IProps) => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);

    const renderPortal = (): React.ReactPortal | null => {
        
        const container = selector();
        
        if (isMount && container) {
            return ReactDOM.createPortal(children, container);
        }

        return null;
    };

    return renderPortal();
};

export default ReactDidMountPortal;
