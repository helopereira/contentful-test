import React from 'react';
import { FaPlay } from "react-icons/fa";
import { MdPlayCircleFilled } from "react-icons/md";

const Video = ({ video }) => {
    
    function redirect (){
        window.location.href=(video.link_botao)
    }

    return (
        <div className={`
        relative w-100% min-h-screen flex justify-center
        `}>
            <video className={`
            w-screen h-screen object-cover object-center
            `} autoPlay loop muted src={video?.video.fields.file.url}/>
            <div className={`
            -translate-y-1/2 absolute flex top-1/2 flex-col items-center
            `}>
                <div className="text-7xl text-zinc-800 font-black">{video?.titulo}</div>
                <div className={`text-3xl text-zinc-700`}>{video?.subtitulo}</div>    

                {video?.texto_botao && video?.link_botao && (
                    <div className={`
                        bg-pink-300/50 border-pink-300/50 rounded-md text-2xl p-3 botao
                    `} onClick={() => redirect()}>{video.texto_botao}</div>
                )}
            </div>
        </div>
    );
};

export default Video;
