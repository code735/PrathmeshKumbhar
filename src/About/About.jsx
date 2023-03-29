import {
    Box,
    Heading,
    VStack,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

export default function About() {
    var bg = useColorModeValue("#EDECEC", "#1A202C")

    return (
        <Box
            margin={"auto"}
            height={'100vh'}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            id="about"
            bg={bg}
        >
            <VStack w={'76%'}>
                <Heading fontWeight={'600'} fontSize={[".7rem", "", "", "", "1.5rem"]}>
                    Hi I am a highly motivated and dedicated computer engineer with a strong educational background and some experience in the field. I have completed my graduation from Masai School and then pursued my Diploma in Computer Engineering and diploma in UI/UX design from Envision Institute. Through these programs, I have gained a solid foundation in computer engineering, including programming languages, computer architecture, and software development.
                </Heading>
                <Heading fontWeight={'600'} fontSize={[".7rem", "", "", "", "1.5rem"]}>
                    In addition to my formal education, I have also had the opportunity to apply my skills in real-world projects, as I have worked as a freelancer. I have worked on one or two projects, which provided me with valuable experience in project management, problem-solving, and teamwork. These projects have also helped me to develop my technical skills and understanding of the industry.
                </Heading>
            </VStack>
        </Box>
    )
}
