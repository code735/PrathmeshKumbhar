import React from 'react'
import { Box, Heading, HStack, Image } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import logo from '../images/logo.svg'
import circle from '../images/circle.svg'
import email from '../images/email.svg'

export default function Home() {
    var bg = useColorModeValue("wheat", "black")
    var color = useColorModeValue("white", "white")

    return (
        <Box
            margin={'auto'}
            flexDirection={"column"}
            height={['100vh']}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            id="home"
            bg={['transparent', '', '', '#000000c4']}
            border={'none'}
            width={'100vw'}
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
                    <Heading as='h1' color={color} fontSize={["1.5rem", "2rem", "3rem"]}>
                        Prathmesh
                    </Heading>
                    <Heading color={color} fontSize={["1.5rem", "2rem", "3rem"]}>
                        Kumbhar
                    </Heading>
                </HStack>
                <a href="#projects" className='project_btn' style={{
                    border: "2px solid white",
                    padding: "10px 20px",
                    transition: ".6s",
                    margin: "2rem 0"
                }}>
                    <Heading as='h1'
                        fontSize={".8rem"}
                        fontWeight={'900'}
                        letterSpacing={'3px'}
                        fontFamily={'Lato, sans-serif'}
                    >
                        PROJECTS
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
