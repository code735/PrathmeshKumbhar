import React, { useEffect, } from 'react'
import { Box, useColorModeValue, Image } from '@chakra-ui/react'
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
            <Image
                className='sticky-img'
                position={'fixed'}
                top="0"
                src={Loading}
                objectFit={'cover'}
                w={'100%'}
                h={'100vh'}
                zIndex='-2'
                display={['none', '', '', 'block']}
                fallbackSrc='https://cdn.dribbble.com/users/989157/screenshots/4632455/media/71cd58426c6661da6ab7f101473e0c26.gif'
            >
                {/* <VideoPlayer /> */}
            </Image>
        </Box>
    )
}