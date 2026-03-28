import React, {useCallback, useEffect,useState } from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){

    const [Password, setPassword] = useState("NFKDHBVFPO");
    const [length , setLength] = useState(10);
    const [numberChanged , setnumberChanged] = useState(false);
    const [charChanged , setcharChanged] = useState(false);


    const generatepassword = useCallback(()=>{    
    
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str+="0123456789"
        if(charChanged)
            str+="+=_-)(*&^%$#@!{}"

        let pass = ""

        for(let i=0;i<length;i++){
            pass+= str[ Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    }, [length,numberChanged,charChanged] )
    
    useEffect(()=>{
       generatepassword();
  
    },[length,numberChanged,charChanged])
   


     return(
        <>
            <h2>Password is: {Password}</h2>
            <div>                
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length is: {length}</label>

            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>

             <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
            <label>Character</label>

            </div>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator/>);