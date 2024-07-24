import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';



interface IProps {
    children: React.ReactNode;
    containerId?: string;
}

/**
 * 傳送到目標 (不進行創建)
 */
const ReactDidMountPortal = ({
    children,
    containerId = 'root',
}: IProps) => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);

    const renderPortal = (): React.ReactPortal | null => {
        
        const container = document.getElementById(containerId);
        
        if(!container){
            throw Error('portal container is null');
        }

        if (isMount) {
            return ReactDOM.createPortal(children, container);
        }

        return null;
    };

    return renderPortal();
};

export default ReactDidMountPortal;
