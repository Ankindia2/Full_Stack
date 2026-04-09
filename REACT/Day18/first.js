import React, { useState } from "react";
import Add from "./Add";
import reactDOM from "react-dom/client"



function App(){ 

    const [language, setLanguage] = useState(["TS","JS","Java"])

      function handleClick(){

                    setLanguage(["C++",...language]);
                }
    return(
        <>

        <div>
            {
                language.map((value)=> <Add key={value} value={value}></Add>)

             
            }
        </div>
        <br></br>
        <br></br>
        <br></br>

        <button onClick={handleClick}>Add Language</button>
        
        </>
    )
}
reactDOM.createRoot(document.getElementById('root')).render(<App></App>)