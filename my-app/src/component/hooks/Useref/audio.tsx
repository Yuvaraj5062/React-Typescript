
import { useRef, useEffect, useState, forwardRef } from "react";

type PlayerProps={
    src:string
}

const Audio= forwardRef<HTMLAudioElement,PlayerProps>(( {src} ,audioRef)=> {


    return(
        <>
    <audio 
    src={src} 
    ref={audioRef}
    preload="metadata">
    </audio>
    </>
    );

    
    });


export default Audio;