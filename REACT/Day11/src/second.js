import Third from"./Third.js"
import GlobalContext from "./global.js"
import { useContext,useCallback } from "react"

export default function Second(){

    return (
        <>
        <h2> Kaise hai aap log</h2>
        <Third count={count} setCount={setCount}/>
        </>
    )
}