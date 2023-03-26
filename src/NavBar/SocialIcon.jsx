import { Flex, Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsLinkedin, } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export default function SocialIcon() {
    const color = useColorModeValue("#11468F", "white")

    return (
        <div>
            <Flex height="100vh" flexDirection={"column"} justifyContent="center" position={"fixed"} px='4' zIndex={'1'}>
                <Flex flexDirection={"column"} alignItems="center" gap='10px' left='0'>
                    <Box height={'100px'} w="1px" bg={color}></Box>
                    <NavLink to='https://github.com/code735' target='_blank'>
                        <BsGithub color={color} />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/prathmesh-kumbhar-54287b1a3" target='_blank'>
                        <BsLinkedin color={color} />
                    </NavLink>
                    <Box height={'100px'} w="1px" bg={color}></Box>
                </Flex>
            </Flex>
        </div >
    )
}
