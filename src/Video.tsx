import React from 'react';
import { IoPause } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { useEffect,useRef, useState } from 'react';

const Video = ({ video }) => {
    const [paused, setPaused] = useState(false)
    const videoRef = useRef();
    const playPauseBtn = useRef();

    function playPause(){
        paused? play() : pause()
    }

    function play (){
        videoRef.current.play();
        setPaused(false)
    }

    function pause(){
        videoRef.current.pause();
        setPaused(true)
    }

    useEffect(() => {
        const handleScroll = () => {
          play();
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    function redirect (){
        window.location.href=(video.link_botao)
    }

    

    return (
        <div className={`
        relative w-100% min-h-screen flex justify-center
        `}>
            <video ref={videoRef} className={`
            w-screen h-screen object-cover object-center 
            `} loop muted autoPlay  poster={video?.poster?.fields.file.url} src={video?.video.fields.file.url}/>
            <div className={`
            -translate-y-1/2 absolute flex top-1/2 flex-col items-center text-center
            `}>
                <p className="text-7xl text-zinc-800 font-black">{video?.titulo}</p>
                <p className={`text-3xl text-zinc-700 `}>{video?.subtitulo}</p>    

                {video?.texto_botao && video?.link_botao && (
                    <div className={`
                        bg-pink-300/50 border-pink-300/50 rounded-md text-2xl p-3 botao
                    `} onClick={() => redirect()}>{video.texto_botao}</div>
                )}
            </div>
            <div class='play-pause-btn' ref={playPauseBtn} onClick={playPause} className={`
            absolute bottom-8 left-8 bg-zinc-300/50 p-4 rounded-full botao flex items-center justify-center play-pause-btn
            `}>
                {paused? (<IoIosPlay/>) : (<IoPause />)}
            </div>
        </div>
    );
};

export default Video;
