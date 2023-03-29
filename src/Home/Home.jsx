import React from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export default function Home() {
    var bg = useColorModeValue("wheat", "#1A202C")
    var color = useColorModeValue("white", "black")

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
            <HStack justifyContent={"center"} alignItems={"center"} w="100%">
                <Heading as='h1' color={color} fontSize={["1.5rem", "2rem", "3rem"]}>
                    Prathmesh
                </Heading>
                <Heading color={color} fontSize={["1.5rem", "2rem", "3rem"]}>
                    Kumbhar
                </Heading>
            </HStack>
            <HStack>
                <Heading as='h1' fontSize={"1rem"} color={color}>
                    Fullstack Developer
                </Heading>
            </HStack>
        </Box >
    )
}
