import React, { useRef, useEffect } from 'react';
import video from './video/bg.mp4'
import { Box } from '@chakra-ui/react';

function VideoPlayer() {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <Box display={["none", "", "", "block"]}>
            <video ref={videoRef} autoPlay muted loop height={'100vh'} width={'100%'}>
                <source src={video} type="video/mp4" />
            </video>
        </Box>
    );
}

export default VideoPlayer;
