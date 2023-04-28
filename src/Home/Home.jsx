import React from 'react'
import {
    Box,
    Heading,
    HStack,
    Image,
    Button,
    Text
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import logo from '../images/logo.svg'
import circle from '../images/circle.svg'
import email from '../images/email.svg'
import { AiOutlinePause } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { NAVBAR_BACKGROUND_BG_FUNCTION } from '../Redux/action'
import resume from './Resume.pdf'

export default function Home() {
    var bg = useColorModeValue("wheat", "black")
    var color = useColorModeValue("white", "white")
    let videoaction = useSelector(state => state.navbarBg)
    let dispatch = useDispatch();

    return (
        <Box
            margin={'auto'}
            flexDirection={"column"}
            height={['100vh']}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            id="home"
            bg={['transparent', '', '', '']}
            border={'none'}
            width={'100%'}
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <HStack justifyContent={"center"} alignItems={"center"} w="100%">
                    <Heading as='h1' color={color} fontSize={["1.5rem", "2rem", "3rem"]} fontFamily={'EB Garamond, serif'} fontWeight={'400'}>
                        Prathmesh
                    </Heading>
                    <Heading color={color} fontSize={["1.5rem", "2rem", "3rem"]} fontFamily={'EB Garamond, serif'} fontWeight={'400'}>
                        Kumbhar
                    </Heading>
                </HStack>
                <a onClick={() => {
                    window.open(resume);
                }} className='project_btn' style={{
                    border: "2px solid",
                    padding: "10px 20px",
                    transition: ".6s",
                    margin: "2rem 0",
                    background: 'black',
                    borderColor: 'black',
                    color: 'white',
                }}
                >
                    <Heading as='h1'
                        fontSize={"1rem"}
                        fontWeight={'900'}
                        letterSpacing={'3px'}
                        fontFamily={'Lato, sans-serif'}
                        textTransform={'uppercase'}
                    >
                        Resume
                    </Heading>
                </a>
            </motion.div >
            <Box
                display={["none", "", "", "block"]}
                width={'150px'}
                position={'absolute'}
                right={'2rem'}
                bottom={'2rem'}
            >
                <Box
                    position={'relative'}
                    top={'0'}
                    left={'0'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity }}
                    >
                        <Image src={circle}></Image>
                    </motion.div>
                    <Box
                        position={'absolute'}
                        width={'40px'}
                    >
                        <Image src={logo}></Image>
                    </Box>
                </Box>
            </Box>
            <Box
                position={'absolute'}
                display={["none", "", "", "block"]}
                w={'1.2rem'}
                left={'20px'}
                bottom={'30px'}
            >
                <Image src={email}></Image>
            </Box>
        </Box >
    )
}
