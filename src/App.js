import React from 'react';
import Room from './Room';
import ContextValue from "./Context";

const App=() => {

    return <>
        <ContextValue.Provider value={"this is provider"}>
            <Room/>
        </ContextValue.Provider>
    </>

}
export default App;