import { Box, Heading, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function Skills() {
    var bg = useColorModeValue("wheat", "#1A202C")

    return (
        <Box w={'100%'} margin={"auto"} bg={bg} height={'100vh'} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} id="about">
            <VStack>
                <Heading fontSize={[".7rem", "", "", "", "1.5rem"]}>
                    Skills
                </Heading>
            </VStack>
        </Box>
    )
}
