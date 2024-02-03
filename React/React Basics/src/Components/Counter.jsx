import {useState} from "react";

function Counter(){
    let [count, setCount] = useState(0);
    //let count = 0;

    function incCount(){
        // count++;
        // console.log(count);
        count++;
        setCount(count);
        console.log(count);
    }

    return(
        <>
            <h1>States in React</h1>
            <br/>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Counter</button>
        </>
    );
}

export default Counter;