import React,{useCallback,useEffect,useMemo,useRef,useState} from "react";
import ReactDOM from "react-dom/client"

// function App(){
//     const [count,setCount] = useState(0);
//     const money = useRef(0);

//     return(
//         <>
//         <h1>Counter is:{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>

//         <h1>Money is: {money.currentcurrent}</h1>
//         <button onClick={()=>money.current = money.current+1}>Increment</button>
//         <button onClick={()=>money.current = money.current-1}>Decrement</button>
//         </>
//     )
// }


function StopWatch(){

    const [time,setTime] = useState(0);
    const [isRunning,setRunning] = useState(false);
    const intervalRef = useRef(null);

    function start(){
        if(!isRunning){
        intervalRef.current = setInterval(()=>{
            setTime((prevTime)=>prevTime+1);
        },1000)
        setRunning(true);
    }
    }
    function stop(){
        if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current= null;
        setRunning(false);
        }
    }
    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    return(
        <>
        <h1>StopWatch is: {time}</h1>
        <button onClick={()=>start()}>Start</button>
        <br></br>
        <br></br>
          <button onClick={()=>stop()}>Stop</button>
             <br></br>
             <br></br>
          <button onClick={()=>reset()}>Reset</button>
        
        </>

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>);
