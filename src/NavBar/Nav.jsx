import { Button, Flex, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { FiMoon } from 'react-icons/fi'
import { CiSun } from 'react-icons/ci'
import { BsCodeSlash } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

export default function Nav() {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<FiMoon fontSize="1.3rem" />, <CiSun fontSize="1.5rem" />)
    const buttonbg = useColorModeValue("transparent", "transparent");

    return (
        <Flex display={["none", "", "", "flex"]} width="100%" justifyContent="space-between" alignItems="center">
            <Tooltip label='Home' borderRadius={'5px'}>
                <a href='#home'>
                    <Button px="2" bg={buttonbg}>
                        <AiOutlineHome fontSize="1.3rem" />
                    </Button>
                </a>
            </Tooltip>
            <Tooltip label="About" borderRadius={'5px'}>
                <a href="#about">
                    <Button px="2" bg={buttonbg}>
                        <BsPerson fontSize="1.5rem" />
                    </Button>
                </a>
            </Tooltip>
            <Tooltip label={'Projects'} borderRadius={'5px'}>
                <Button px="2" bg={buttonbg}>
                    <MdWorkOutline fontSize="1.3rem" />
                </Button>
            </Tooltip>
            <Tooltip label={'Skills'} borderRadius={'5px'}>
                <Button px="2" bg={buttonbg}>
                    <BsCodeSlash fontSize="1.3rem" />
                </Button>
            </Tooltip>
            <Tooltip label={'Theme'} borderRadius={'5px'}>
                <Button onClick={() => {
                    toggleColorMode();
                }} px="2" bg={buttonbg}>
                    {icon}
                </Button>
            </Tooltip>
        </Flex >
    )
}
