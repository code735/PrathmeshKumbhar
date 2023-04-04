import React, { useEffect } from 'react'
import {
    Box,
    Heading,
    VStack,
    Flex,
    useColorModeValue,
    Image
} from '@chakra-ui/react'
import about from '../images/about.jpg'
import profile from '../images/profile.jpg'
import { GithubStat } from '../Github Info/GithubStats'
import { GithubContributions } from '../Github Info/GithubCalender'

export default function About() {
    var bg = useColorModeValue("wheat", "black")
    var textColor = useColorModeValue("black", "white")

    return (

        <Flex>
            <Box
                width={'50%'}
                display={["none", "", "", "flex"]}
                justifyContent={'center'}
                alignItems={'center'}
                bg={`url(${about})`}
                backgroundRepeat={'no-repeat'}
                backgroundSize={'cover'}
            >
                <Box
                    border={'2px solid white'}
                    width={'90%'}
                    height={'90%'}
                    borderRadius={'10px'}
                >
                    <Box
                        w={'90%'}
                        p={'40px'}
                        margin={'auto'}
                        display={'flex'}
                        flexDirection={'column'}
                        gap={'20px'}
                        height={'100%'}
                        justifyContent={'space-between'}
                    >
                        <Flex
                            gap={'20px'}
                        >
                            <Image
                                src={profile}
                                w={'100px'}
                                h={'100px'}
                                objectFit={'cover'}
                                borderRadius={'100%'}
                            ></Image>
                            <Box>
                                <Heading fontWeight={'200'} as={'h1'} color={'white'}>
                                    Prathmesh Kumbhar
                                </Heading>
                                <Heading fontWeight={'200'} fontSize={'1.5rem'} color={'white'}>
                                    Fullstack Developer
                                </Heading>
                            </Box>
                        </Flex>
                        <GithubStat />
                        <GithubContributions />
                    </Box>
                </Box>
            </Box>
            <Box
                width={["", "", "", '50%']}
                margin={"auto"}
                height={'100vh'}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                id="about"
                bg={bg}
            >
                <VStack w={'76%'} fontFamily={'EB Garamond, serif'} alignItems={'flex-start'} color={textColor}>
                    <Heading as={'h1'} fontFamily={'EB Garamond, serif'} fontWeight={'400'} borderBottom={'1px solid'} pb={'2'} mb={'3'}>
                        About Me
                    </Heading>
                    <Heading fontWeight={'400'} fontSize={[".7rem", "", "", "", "1.2rem"]} fontFamily={'EB Garamond, serif'}>
                        Hi I am a highly motivated and dedicated computer engineer with a strong educational background and some experience in the field. I have completed my graduation from Masai School and then pursued my Diploma in Computer Engineering and diploma in UI/UX design from Envision Institute. Through these programs, I have gained a solid foundation in computer engineering, including programming languages, computer architecture, and software development.
                    </Heading>
                    <Heading fontWeight={'400'} fontSize={[".7rem", "", "", "", "1.2rem"]} fontFamily={'EB Garamond, serif'}>
                        In addition to my formal education, I have also had the opportunity to apply my skills in real-world projects, as I have worked as a freelancer. I have worked on one or two projects, which provided me with valuable experience in project management, problem-solving, and teamwork. These projects have also helped me to develop my technical skills and understanding of the industry.
                    </Heading>
                </VStack>
            </Box>
        </Flex >
    )
}
