import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

// backgtround color changes:

function Main(){

        const [color,setColor] = useState("black");

// useEffect(callback function ,dependency)
useEffect(()=>{
    document.body.style.backgroundColor = color;

},[color])

        // document.body.style.backgroundColor = color;


    return (
        <>
             <h1>Background Color Changer</h1>
                     <div className="but">                      
                        <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                        <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                        <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                        <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
                        <button style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>purple</button>
                    </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);