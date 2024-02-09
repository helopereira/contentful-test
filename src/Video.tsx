import React from 'react';
import { FaPlay } from "react-icons/fa";
import { MdPlayCircleFilled } from "react-icons/md";

const Video = ({ video }) => {
    

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
            </div>
        </div>
    );
};

export default Video;
