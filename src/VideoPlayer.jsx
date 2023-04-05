import React, { useRef, useEffect } from 'react';
import video from './video/bg.mp4'
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function VideoPlayer() {
    const videoRef = useRef(null);
    let videoaction = useSelector(state => state.navbarBg)

    console.log(videoaction)

    useEffect(() => {
        videoaction ? videoRef.current.play() : videoRef.current.pause();
    }, [videoaction]);

    return (
        <Box display={["none", "", "", "block"]}>
            <video ref={videoRef} autoPlay muted loop height={'100vh'} width={'100%'}>
                <source src={video} type="video/mp4" />
            </video>
        </Box>
    );
}

export default VideoPlayer;
