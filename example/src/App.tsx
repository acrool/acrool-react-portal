import './App.css';

import {GridThemeProvider} from '@acrool/react-grid';

import Example from './views/Example';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Example/>

                {/*<ModalPortal*/}
                {/*    isVisibleQueueKey={true}*/}
                {/*/>*/}

            </div>
        </GridThemeProvider>
    );

}

export default App;
