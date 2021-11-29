import { useRef, useEffect, useState } from "react";



function Useref() {
    const [inputState,setInput]=useState('')
    const input = useRef<HTMLInputElement>(null);
    //const [count,setCount]=useState<number>(1)
    const count = useRef(1)
        useEffect(()=>{
     // setCount((prevState)=>prevState+1);
     count.current+=1;
    })




const onClick=()=>{
      if (input.current) {
        console.log(input.current.value)
      }
    }
    return (
        <div>
          <h2>simple useRef Example </h2>
          <input  type="text" ref={input} 
          onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={onClick}>click me</button>
          {/* count = {count} */}
          <br/>
          input = {input.current?.value}
          <br/>
          Rendered = {count.current}
        </div>
      );
    };

export default Useref;
