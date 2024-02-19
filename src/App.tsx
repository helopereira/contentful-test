import React from 'react';
import useContentful from './useContentful';
import { useEffect, useState } from 'react';
import Card from './Card';
import Video from './Video';

export default function App (){
  const[idols, setIdols] = useState([])
  const[video, setVideo] = useState([])
  const { getIdols, getVideo } = useContentful()

  useEffect(()=>{
    getIdols().then((response) => response && setIdols(response));
    getVideo().then((response) => response && setVideo(response));
  }, []);

  return(
      <div className='flex justify-center items-center flex-col gap-10 bg-pink-200 font-mono pb-10'>
        <Video video={video[0]}/>
        {console.log(video[0])};
        <h1 className='font-black text-5xl text-pink-500'>✮ Idols Collection ✮</h1>
        <div className='flex flex-row gap-3 justify-center items-center flex-wrap'>
          {idols.map((idols) => {
            return <Card idols={idols}/> 
          })}
        </div>
      </div>  
  )
}


