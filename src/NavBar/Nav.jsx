import { Button, Flex, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { FiMoon } from 'react-icons/fi'
import { CiSun } from 'react-icons/ci'
import { BsCodeSlash } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from '../Redux/action'

export default function Nav() {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<FiMoon fontSize="1.3rem" />, <CiSun fontSize="1.5rem" />)
    const buttonbg = useColorModeValue("transparent", "transparent");

    var togglepreloader = useSelector(state => state.togglepreloader);
    var dispatch = useDispatch();

    return (
        <Flex display={["none", "", "", "flex"]} width="100%" justifyContent="space-between" alignItems="center">
            <Tooltip label='Home'>
                <a href='#home'>
                    <Button px="2" bg={buttonbg}>
                        <AiOutlineHome fontSize="1.3rem" />
                    </Button>
                </a>
            </Tooltip>
            <Tooltip label="About">
                <a href="#about">
                    <Button px="2" bg={buttonbg}>
                        <BsPerson fontSize="1.5rem" />
                    </Button>
                </a>
            </Tooltip>
            <Tooltip label={'Projects'}>
                <Button px="2" bg={buttonbg}>
                    <MdWorkOutline fontSize="1.3rem" />
                </Button>
            </Tooltip>
            <Tooltip label={'Skills'}>
                <Button px="2" bg={buttonbg}>
                    <BsCodeSlash fontSize="1.3rem" />
                </Button>
            </Tooltip>
            <Tooltip label={'Theme'}>
                <Button onClick={() => {
                    toggleColorMode();
                    dispatch(PRELOADER_TOGGLE_FUNCTION(true));
                }} px="2" bg={buttonbg}>
                    {icon}
                </Button>
            </Tooltip>
        </Flex >
    )
}
