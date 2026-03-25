import React,{useState} from "react";
import ReactDOM from 'react-dom/client'

function Counter(){
    let [count ,setCount] = useState(0);

    function incrementnumber(){
        count = count+1;
        setCount(count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }

    function decrementnumber(){
        count = count -1;
        setCount(count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }
    return (
        <div className="first">
            <h1>Count is:{count}</h1>
            <button onClick={incrementnumber}>Increment {count}</button>
            <button onClick={decrementnumber}>Decrement {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)

// hook special function de deta hai react khud manupulate kr dega khud se manupulate nhui krna hoga

