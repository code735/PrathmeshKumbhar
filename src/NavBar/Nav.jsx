import { Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FiMoon } from 'react-icons/fi'
import { CiSun } from 'react-icons/ci'
import { BsCodeSlash } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


export default function Nav() {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<FiMoon fontSize="1.3rem" />, <CiSun fontSize="1.5rem" />)
    const buttonbg = useColorModeValue("transparent", "transparent");

    return (
        <Flex display={["none", "", "", "flex"]} width="100%" justifyContent="space-between" alignItems="center">
            <a href='#home'>
                <Button px="2" bg={buttonbg}>
                    <AiOutlineHome fontSize="1.3rem" />
                </Button>
            </a>
            <a href="#about">
                <Button px="2" bg={buttonbg}>
                    <BsPerson fontSize="1.5rem" />
                </Button>
            </a>
            <Button px="2" bg={buttonbg}>
                <MdWorkOutline fontSize="1.3rem" />
            </Button>
            <Button px="2" bg={buttonbg}>
                <BsCodeSlash fontSize="1.3rem" />
            </Button>
            <Button onClick={toggleColorMode} px="2" bg={buttonbg}>
                {icon}
            </Button>
        </Flex >
    )
}
