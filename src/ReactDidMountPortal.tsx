import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import {TSelector} from './types';



interface IProps {
    children: React.ReactNode;
    rootSelector: TSelector;
}

/**
 * 傳送到目標 (不進行創建)
 */
const ReactDidMountPortal = ({
    children,
    rootSelector,
}: IProps) => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);

    const renderPortal = (): React.ReactPortal | null => {

        if (isMount) {
            return ReactDOM.createPortal(children, rootSelector());
        }

        return null;
    };

    return renderPortal();
};

export default ReactDidMountPortal;
