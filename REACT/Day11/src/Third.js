import GlobalContext from "./global"
import { useContext } from "react"
export default function Third({count,setCount}){

    // const data = useContext(GlobalContext)

    const {count,setCount} = useContext(GlobalContext);

    return (
        <>
        <h2> I am printing {count}</h2>
        </>
    )
}