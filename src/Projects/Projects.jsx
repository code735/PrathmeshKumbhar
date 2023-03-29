import { Box, Heading, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function About() {
    var bg = useColorModeValue("wheat", "#1A202C")

    return (
        <Box w={'100%%'} bg={bg} margin={"auto"} height={'100vh'} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} id="projects">
            <VStack>
                <Heading fontSize={[".7rem", "", "", "", "1.5rem"]}>
                    Hello How Are you Im under the water
                </Heading>
            </VStack>
        </Box>
    )
}
