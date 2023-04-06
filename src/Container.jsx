import React, { useEffect, lazy, Suspense } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import { Preloader } from './Preloader/Preloader'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from './Redux/action'
import lightmountain from './images/light.jpg'
import VideoPlayer from './Videoplayer/VideoPlayer'

export default function Container() {
    const dispatch = useDispatch();
    const togglepreloader = useSelector(state => state.togglepreloader);
    const bgimg = lightmountain;
    const Lazycomponent = lazy(() => import('./Videoplayer/VideoPlayer'));

    useEffect(() => {
        setTimeout(() => {
            dispatch(PRELOADER_TOGGLE_FUNCTION(false));
        }, 200);
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
                bgImage={[[`url(${bgimg})`], '', '', 'none']}
                bgSize={'cover'}
                bgPosition={"top"}
                bgRepeat="no-repeat"
                w={'100%'}
                h={'100vh'}
                zIndex='-2'
            >
                <Suspense fallback={<Preloader />}>
                    <Lazycomponent />
                </Suspense>
            </Box>
        </Box>
    )
}