import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

export default function About() {
    return (
        <Box w={'70%'} margin={"auto"} height={'100vh'} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} id="about">
            <VStack>
                <Heading fontSize={[".7rem", "", "", "", "1.5rem"]}>
                    Hello How Are you Im under the water
                </Heading>
            </VStack>
        </Box>
    )
}
