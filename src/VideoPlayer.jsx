import React, { useRef, useEffect } from 'react';
import video from './video/bg.mp4'

function VideoPlayer() {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <video ref={videoRef} autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default VideoPlayer;
