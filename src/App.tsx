import React from 'react';
import useContentful from './useContentful';
import { useEffect, useState } from 'react';
import Card from './Card';

export default function App (){
  const[idols, setIdols] = useState([])
  const { getIdols } = useContentful()

  useEffect(()=>{
    getIdols().then((response) => response && setIdols(response));
  }, []);

  

  return(
      <div className='flex justify-center items-center flex-col gap-10 bg-pink-200 h-screen font-mono'>
        <h1 className='font-black text-5xl text-pink-500'>✮ Idols Collection ✮</h1>
        <div className='flex flex-row gap-3 justify-center items-center flex-wrap'>
          {idols.map((items, i) => {
            
            return <Card key={i} idols={items}/> 
          })}
        </div>
      </div>  
  )
}


