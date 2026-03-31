import React,{useState,useMemo,useCallback,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Second from "./second";
import GlobalContext from "./global";
import { useContext } from "react";


function App(){

    const [count ,setCount]= useState(0);

    return (
        <>
        <GlobalContext.Provider  value={{count:count,setCount:setCount}}>

             <h1>Hello coder Army</h1>
             <Second />

        </GlobalContext.Provider>
       
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);