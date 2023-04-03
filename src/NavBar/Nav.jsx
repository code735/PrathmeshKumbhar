import {
    Button,
    Flex,
    useColorMode,
    useColorModeValue,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerBody,
    DrawerContent,
    Box,
    IconButton
} from '@chakra-ui/react'
import React from 'react'
import { FiMoon } from 'react-icons/fi'
import { CiSun } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux'
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { useDisclosure } from '@chakra-ui/react'

export default function Nav() {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<FiMoon fontSize="1.3rem" />, <CiSun fontSize="1.5rem" />)
    const buttonbg = useColorModeValue("transparent", "transparent");

    var togglepreloader = useSelector(state => state.togglepreloader);
    var dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box
            display={['none', '', '', 'block']}
        >
            <Button ref={btnRef} as={IconButton} onClick={onOpen} icon={<HamburgerIcon />} color={'white'} bg={'black'} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={'gray.700'}>
                    <DrawerCloseButton color={'white'} />

                    <DrawerBody
                        display={'flex'}
                        justifyContent={'flex-start'}
                        flexDirection={'column'}
                        height={'100vh'}
                    >
                        <Flex
                            display={["none", "", "", "flex"]}
                            flexDir={'column'}
                            alignItems="space-between"
                            gap={'40px'}
                            height={'100vh'}
                        >
                            <a href='#home'>
                                <Button px="2"
                                    bg={buttonbg}
                                    borderRadius='0'
                                    color={'white'}
                                    fontSize={'2rem'}
                                >
                                    Home
                                </Button>
                            </a>
                            <a href="#about">
                                <Button px="2"
                                    bg={buttonbg}
                                    borderRadius='0'
                                    color={'white'}
                                    fontSize={'2rem'}
                                >
                                    About
                                </Button>
                            </a>
                            <a href="#projects">
                                <Button px="2"
                                    bg={buttonbg}
                                    borderRadius='0'
                                    color={'white'}
                                    fontSize={'2rem'}
                                >
                                    Project
                                </Button>
                            </a>
                            <a href="#skills">
                                <Button px="2"
                                    bg={buttonbg}
                                    borderRadius='0'
                                    color={'white'}
                                    fontSize={'2rem'}
                                >
                                    Skills
                                </Button>
                            </a>
                            {/*  */}
                        </Flex >
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
