import React, { useEffect } from 'react';
import Generic2 from './generic2';
import Generic3 from './generic3';
//decleare only for generic 3
export interface user{
    id:number,
    name:String,
    age:number 

}
function Generic1() {
type a= true | false
type b= string | string[]
let c:number | number[]
    const users=[
        { id:1 , name:"john" , age:55},
        { id:2 , name:"sohn" , age:50},
        { id:3 , name:"vishal" , age:25},
    ];
    const orders=[
        { id:4 , quentity:20 , amount:55},
        { id:5 , quentity:10 , amount:50},
        { id:6 , quentity:40 , amount:25},
    ];
    
  return (
    <div >
      <Generic2 items={users} /> <br />
      <Generic2 items={orders} /> <br />
      <Generic3 items={users} />
    </div>
  );
}

export default Generic1;
