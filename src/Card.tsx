import React from 'react';

const Card = ({ idols }) => {
    return (
      <div className={`
      flex bg-pink-400 border border-pink-400 rounded-md overflow-hidden
      h-80 w-1/4 flex-row 
      `}>
        <div className='flex flex-row'> 
          <img  className='h-auto w-64' src={idols.foto.fields.file.url}/>
          <div className='flex flex-col p-3 gap-3'>
            <div className='font-black'>
              <h1 className='text-3xl'>{idols.name}</h1>
              <h2 className='text-2xl text-pink-700'>{idols.grupo}</h2>
            </div>
            <p>{idols.descricao}</p>
          </div>
        </div>
     </div>
    );
  };
  
  export default Card;