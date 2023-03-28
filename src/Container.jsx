import React, { useEffect } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import { Preloader } from './Preloader/Preloader'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from './Redux/action'

export default function Container() {

    var togglepreloader = useSelector(state => state.togglepreloader);
    var dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(PRELOADER_TOGGLE_FUNCTION(false));
        }, 3000);
    })

    return (
        togglepreloader ? <Preloader /> : <Box height={"100vh"} backgroundSize={'cover'}>
            <Parallax pages={4} className="parallax" >
                <ParallaxLayer offset={0}
                    factor={4}>
                    <Home />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.1}>
                    <About />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.1}>
                    <Projects />
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.1}>
                    <Skills />
                </ParallaxLayer>
            </Parallax>
        </Box >
    )
}
