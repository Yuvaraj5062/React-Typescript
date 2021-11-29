import React, { useRef, useState } from 'react';
import Audio from './audio';


const url ='/song.mpeg'
function Main() {
  //const audioPlayer= useRef<HTMLMediaElement | null>(null)
  const audioRef=useRef<HTMLMediaElement>(null)
  const [isPlaying,setIsPlaying] = useState(false)

  const onPlay=()=>{
      if(audioRef.current){
          const{current:audioElem}=audioRef;
          if(isPlaying){
              audioRef.current.pause()  
              setIsPlaying(false);
          }else{
              audioElem.play();
              setIsPlaying(true);
          }
      }
  }
  return (
    <>
    <h2>audio song (forwardRef)</h2>
    <Audio 
    ref={audioRef}
    src={url}/>
        <button
          type="button"
          className="btn btn-warning float-right"
         disabled={isPlaying} onClick={onPlay}>
        Play
    </button>
    
    <button 
      type="button"
      className="btn btn-warning float-right"
      disabled={!isPlaying} onClick={onPlay}>
        Pause
    </button>
    </>

  );
}

export default Main;
