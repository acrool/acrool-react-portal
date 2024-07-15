import ReactPortal from '@acrool/react-portal';
import {useState} from 'react';



const Example = () => {

    const [isVisible1, setVisible1] = useState(false);
    const [isVisible2, setVisible2] = useState(false);


    return <div className="d-flex">

        <button type="button" onClick={() => setVisible1(curr => !curr)}>Portal 1 {String(isVisible1)}</button>
        <button type="button" onClick={() => setVisible2(curr => !curr)}>Portal 2 {String(isVisible2)}</button>

        {isVisible1 &&
            <ReactPortal
                id="acrool-react-modal"
            >
                isVisible 1
            </ReactPortal>
        }


        {isVisible2 &&
            <ReactPortal
                id="acrool-react-modal"
            >
                isVisible 2
            </ReactPortal>
        }



    </div>;
};

export default Example;




