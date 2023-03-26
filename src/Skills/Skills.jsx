import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Skills() {
    return (
        <Box w={'70%'} margin={"auto"} height={'100vh'} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} id="about">
            <VStack>
                <Heading fontSize={[".7rem", "", "", "", "1.5rem"]}>
                    Skills
                </Heading>
            </VStack>
        </Box>
    )
}
