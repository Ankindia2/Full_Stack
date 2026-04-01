import React from "react";

import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route,Link } from "react-router";
import { Home } from "./src/Home";
import { Contact, contact } from "./src/Contact";
import { Dashboard } from "./src/Dashboard";
import { Details } from "./src/details";
import { Zero } from "./src/Zero";
import { Hello } from "./src/Hello";
import { Hi } from "./src/Hi";

function App(){
    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <Link to="/Details">Details</Link>
            
        </nav>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/Details " element={<Details></Details>}></Route>
            <Route index element={<Zero></Zero>}></Route>
            <Route path="Hello" element={<Hello></Hello>}></Route>
            <Route path="Hi" element={<Hi></Hi>}></Route>
            
        </Routes>
        </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)