import React, { useEffect, } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import { Preloader } from './Preloader/Preloader'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from './Redux/action'
import lightmountain from './images/light.jpg'
import Loading from './images/Loading.gif'
import VideoPlayer from './Videoplayer/VideoPlayer'

export default function Container() {
    const dispatch = useDispatch();
    const togglepreloader = useSelector(state => state.togglepreloader);
    const bgimg = lightmountain;

    useEffect(() => {
        setTimeout(() => {
            dispatch(PRELOADER_TOGGLE_FUNCTION(false));
        }, 2000);
    }, [togglepreloader])


    return (
        togglepreloader ? <Preloader /> : <Box height={"100vh"} className="parallax" >
            <Home />
            <About />
            <Projects />
            <Skills />
            <Box
                className='sticky-img'
                position={'fixed'}
                top="0"
                bgImage={`url(${bgimg})`}
                bgSize={'cover'}
                bgRepeat="no-repeat"
                w={'100%'}
                h={'100vh'}
                zIndex='-2'
                display={['', '', '', 'none']}
            >
            </Box>
            <Box
                className='sticky-img'
                position={'fixed'}
                top="0"
                bgImage={`url(${Loading})`}
                bgSize={'cover'}
                bgPosition={'center'}
                bgRepeat="no-repeat"
                w={'100%'}
                h={'100vh'}
                zIndex='-2'
                display={['none', '', '', 'block']}
            >
                <VideoPlayer />
            </Box>
        </Box>
    )
}