import React, { useEffect } from 'react';


function Second() {
  useEffect(() => {
		console.log(localStorage.getItem("firstName"));

	}, [localStorage.getItem("firstName")]);
    
  return (
    <div >
      <h2>okay  again</h2>
    </div>
  );
}

export default Second;
