import React, { useEffect, useState } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import { Preloader } from './Preloader/Preloader'
import { useSelector, useDispatch } from 'react-redux'
import { NAVBAR_BACKGROUND_BG_FUNCTION, PRELOADER_TOGGLE_FUNCTION } from './Redux/action'
import darkmountain from './images/dark.jpg'
import lightmountain from './images/light.jpg'
import video from './video/bg.mp4'
import VideoPlayer from './VideoPlayer'

export default function Container() {
    const dispatch = useDispatch();
    const togglepreloader = useSelector(state => state.togglepreloader);
    const bgimg = lightmountain;

    useEffect(() => {
        setTimeout(() => {
            dispatch(PRELOADER_TOGGLE_FUNCTION(false));
        }, 3000);
    }, [togglepreloader])

    useEffect(() => {
        window.onload = () => {
            setTimeout(() => {
                dispatch(PRELOADER_TOGGLE_FUNCTION(false));
            }, 3000);
        };
    }, [togglepreloader]);

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop === 0) {
            dispatch(NAVBAR_BACKGROUND_BG_FUNCTION(true));
        } else if (scrollTop === 1000) {
            dispatch(NAVBAR_BACKGROUND_BG_FUNCTION(false));
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        console.log(togglepreloader)
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
                bgImage={[`url(${bgimg})`]}
                bgSize={'cover'}
                bgPosition={"top"}
                bgRepeat="no-repeat"
                w={'100%'}
                h={'100vh'}
                zIndex='-2'
            >
                <VideoPlayer />
            </Box>
        </Box>
    )
}