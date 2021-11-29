import React, { useEffect, useState } from 'react';
import Second from './second';

interface name{
  firstName:String;
  lastName:String;
}


function Local() {
    const [value,setValue] = useState<String>()
    const [first,setFirst] = useState<name[]>()
    let userName:name[]=[{
      firstName:"abc",
      lastName:"String"
    }]
    
    const handleChange =( e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        setValue(e.target.value)
        localStorage.setItem("firstName",e.target.value);
    }
    useEffect(() => {
      console.log("value",value,userName[0].firstName)
  
    }, [value]);
  return (
    <div >
      <h2>okay </h2>
      <form>
          <input type="text" onChange={(e)=>handleChange(e)}></input>
          </form>
      <Second />
    </div>
  );
}

export default Local;
