import React from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Home() {
    var bg = useColorModeValue("wheat", "#1A202C")
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
            bg={'transparent'}
            border={[`20px solid ${bg}`, `30px solid ${bg}`]}
        >
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
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
                <HStack py={'2rem'}>
                    <Heading as='h1' fontSize={"1rem"} color={color}>
                        Fullstack Developer
                    </Heading>
                </HStack>
                <a href="#projects" className='project_btn' style={{
                    border: "2px solid white",
                    padding: "10px 20px",
                    transition: ".6s"
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
            </motion.div>
        </Box >
    )
}
