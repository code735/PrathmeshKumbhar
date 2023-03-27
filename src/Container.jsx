import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import moon from './images/moon.jpg'
import sun from './images/sun.jpg'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

export default function Container() {
    const bg = useColorModeValue(sun, moon)
    return (
        <Box height={"100vh"} background={`url(${bg})`} backgroundSize={'cover'}>
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
