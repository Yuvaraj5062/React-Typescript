import React, { useEffect } from 'react';
import { user } from './generic1';
interface Items{
    id:number;
    //name:String
}
interface Generic2Props {
    items:user[]
}

function Generic3({items}:Generic2Props ) {
  const a=items
    console.log(a[0].id,typeof a)
    for (let i=0;i<a.length;i++){
        console.log(a[i])
    }
  return (
    <>
      <ul>
          {items.map((item,i)=>(
              <li key={item.id}>{JSON.stringify(item)}</li>
            // <li key={item.id}>{items[i].name}</li>
          ))}
      </ul>
    </>
  );
}

export default Generic3;
