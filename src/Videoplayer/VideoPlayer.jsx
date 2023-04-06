import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Loading from '../images/loading.svg'
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
                <source src="https://firebasestorage.googleapis.com/v0/b/portfolio-4bcc3.appspot.com/o/bg.mp4?alt=media&token=3898527c-c35c-4228-b7ec-3570b19d0e77" type="video/mp4" />
            </video>
        </Box>
    );
}

export default VideoPlayer;