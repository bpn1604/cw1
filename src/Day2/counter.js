import { useState } from "react";
import React from "react";
const Counter = () =>{
    let [Counter , setCounter] = React.useState(0)
    const handleincr = (value)=>{
        setCounter (Counter+value)
    }
    const handlemultily = (value)=>{
        setCounter (Counter *value)
    }

    

    return (
        <>
        <h1>Counter</h1>
        <h2>{Counter}</h2>
        <button onClick={()=>handleincr(1)}>INCREAMENT BY 1</button>
        <button onClick={() => handleincr(-1)}>DECREAMENT BY 1</button>
        <button onClick={() => handlemultily(2)}>MULTIPLY BY 2</button>
        </>
    )

}
export default Counter