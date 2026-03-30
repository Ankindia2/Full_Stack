import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client"

// useMemo hook
// 1.Counter button:increase
// 2.input field:Fibonnaci number
// 0 1 1 2 3 5 8 13 21 34 55

function App(){

    const [count,setCount] = useState(0);   
    const [number, setNumber] = useState(" ");
     // counter

    function Fibbonnaci(n){
        if(n<=1)
            return n;

        return Fibbonnaci(n-1)+Fibbonnaci(n-2);
    }
            const result = useMemo(() => { return Fibbonnaci(number);}, [number]);

    return (
    <>
    <h1>Counter is :{count}</h1>
    <button onClick={()=>setCount(count+1)}> Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>

    
        <div>
            <h2>Fibbonnaci Number is: {result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))}></input>
        </div>
    </>
    
    
    
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);