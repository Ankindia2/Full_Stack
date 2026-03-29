import React,{useCallback, useEffect , useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/header";
import Body from "./component/body";

function GithubProfile(){
    // header
    
    // Body

    return(
        <>
        <Header></Header>
        <Body></Body>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);