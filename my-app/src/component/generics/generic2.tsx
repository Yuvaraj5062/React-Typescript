import React, { useEffect } from 'react';
interface Items{
    id:number;
    //name:String
}
interface Generic2Props<T>{
    items:T[]
}

function Generic2<T extends Items>({items}:Generic2Props<T>) {
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

export default Generic2;
