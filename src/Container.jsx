import React from 'react'
import { Box } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import moon from './images/moon.jpg'
import Projects from './Projects/Projects'

export default function Container() {
    return (
        <Box height={"300vh"}>
            <Parallax pages={3} className="parallax" >
                <ParallaxLayer
                    offset={0}
                    className="parallaxLayer1"
                    factor={3}
                    style={{
                        background: `url(${moon})`,
                        backgroundSize: "cover"
                    }}
                >
                    <Home />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.1}>
                    <About />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.1}>
                    <Projects />
                </ParallaxLayer>
            </Parallax>
        </Box >
    )
}
