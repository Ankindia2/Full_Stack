import React, {useState}from "react";
import ReactDOM from "react-dom/client"
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import {BrowserRouter ,Routes ,Route} from "react-router";


// Header section
function App(){

    return(
       <>
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Restaurant" element={<Restaurant></Restaurant>}></Route>
    </Routes>
    
    </BrowserRouter>
    
   

       
       </>

      
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);