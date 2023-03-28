import React, { useEffect } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import { Preloader } from './Preloader/Preloader'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from './Redux/action'

export default function Container() {

    var togglepreloader = useSelector(state => state.togglepreloader);
    var dispatch = useDispatch();

    var bg = useColorModeValue("wheat", "#1A202C")


    useEffect(() => {
        setTimeout(() => {
            dispatch(PRELOADER_TOGGLE_FUNCTION(false));
        }, 10);
    })

    return (
        togglepreloader ? <Preloader /> : <Box height={"100vh"} className="parallax">
            <Home />
            <About />
            <Projects />
            <Skills />
            <Box className='sticky-img' position={'fixed'} top="0" background={`url('https://img2.wallspic.com/crops/3/3/5/6/2/126533/126533-mountain_range-purple-nature-illustration-atmosphere-3840x2160.jpg')`} w={'100%'} h={'100vh'} zIndex='-2'></Box>
        </Box >
    )
}
