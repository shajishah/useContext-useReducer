import React, {useContext, useReducer, useRef} from 'react';
import ContextValue from "./Context";

const Room = () => {
    let value=useContext(ContextValue);
    const inputRef=useRef();
    const [items ,dispatch]=useReducer((state,action) => {
        switch (action.type) {
            case 'add':
                return [
                    ...state,
                    {
                        id:state.length,
                        name:action.name
                    }
                ];

            case 'remove':
                return state.filter((_,index)=>index !== action.index);


            case 'clear':
                return [];

            default:return state;

        }
    },[]);

    const handlesubmit=(event) => {
        event.preventDefault();
        dispatch({
          type:'add',
          name:inputRef.current.value
        });

        inputRef.current.value='';
    }

    return <>
        <h1> Hello {value} </h1>
        <br/>
        <form onSubmit={handlesubmit}>
        <input ref={inputRef}/>
        </form>
        <button onClick={()=>dispatch({type :'clear'})}>Clear</button>
        <ul>
            {items.map((item,index) =>
            <li
                key={item.id}>{item.name}
            <button onClick={()=>dispatch({
                type: 'remove',index
            })}>x</button>

            </li>

            )}
        </ul>
    </>

}

export default Room;