import React, { useEffect } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import { Preloader } from './Preloader/Preloader'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from './Redux/action'
import darkmountain from './images/dark.jpg'
import lightmountain from './images/light.jpg'
import video from './video/bg.mp4'
import VideoPlayer from './VideoPlayer'

export default function Container() {

    var togglepreloader = useSelector(state => state.togglepreloader);
    var navbarbg = useSelector(state => state.navbarBg);
    var dispatch = useDispatch();
    var bgimg = lightmountain;

    useEffect(() => {
        setTimeout(() => {
            dispatch(PRELOADER_TOGGLE_FUNCTION(false));
        }, 3000);
    })

    useEffect(() => {
        window.onload = () => {
            setTimeout(() => {
                dispatch(PRELOADER_TOGGLE_FUNCTION(false));
            }, 3000);
        };
    }, []);


    return (
        togglepreloader ? <Preloader /> : <Box height={"100vh"} className="parallax" onScroll={() => {
            console.log(navbarbg)
        }}>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Box
                className='sticky-img'
                position={'fixed'}
                top="0"
                backgroundSize={'cover'}
                backgroundPosition={"top"}
                w={'100%'}
                h={'100vh'}
                zIndex='-2'
            >
                <VideoPlayer />
            </Box>
        </Box >
    )
}
