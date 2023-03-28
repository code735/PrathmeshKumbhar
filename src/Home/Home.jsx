import React from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export default function Home() {
    var bg = useColorModeValue("wheat", "#1A202C")
    return (
        <Box
            margin={'auto'}
            flexDirection={"column"}
            height={'100vh'}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            id="home"
            bg={'transparent'}
            border={`40px solid ${bg}`}
        >
            <HStack justifyContent={"center"} alignItems={"center"} w="100%">
                <Heading as='h1' fontSize={["1.5rem", "2rem", "3rem"]}>
                    Prathmesh
                </Heading>
                <Heading color={"#11468F"} fontSize={["1.5rem", "2rem", "3rem"]}>
                    Kumbhar
                </Heading>
            </HStack>
            <HStack>
                <Heading as='h1' fontSize={"1rem"}>
                    Fullstack Developer
                </Heading>
            </HStack>
        </Box >
    )
}
