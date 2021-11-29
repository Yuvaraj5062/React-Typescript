import React, { useRef } from 'react';
import './App.css';
import Callback1 from './component/callback/callback1';
import Main from './component/hooks/Useref/main';
import Useref from './component/hooks/Useref/useref';


const url ='/song.mpeg'
function App() {
  const audioPlayer= useRef<HTMLAudioElement | null>(null)
  return (
    <div className="App">
      {/* <Local/> */}
      {/* <Generic1/> */}
       <Callback1 onSubmit={function (email: string, password: string): void {
        throw new Error('Function not implemented.');
      } } /> 

      {/* <Formik2 /> */}


 {/* basic example of useRef */}
    <Useref />
     {/* forwardRef */}
    <Main />
    
    </div>

  );
}

export default App;
