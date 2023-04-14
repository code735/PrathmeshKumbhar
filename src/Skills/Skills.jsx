import {
    Box,
    Grid,
    GridItem,
    Flex,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { FiFigma } from 'react-icons/fi'
import { SiChakraui, SiRedux, SiReactrouter } from 'react-icons/si'
import { TfiCss3 } from 'react-icons/tfi'
import { RiHtml5Line, RiReactjsLine } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

export default function Skills() {
    var bg = useColorModeValue("wheat", "black")
    var data = [
        {
            icon: <RiReactjsLine />,
            name: "ReactJS",
            color: "white"
        },
        {
            icon: <IoLogoJavascript />,
            name: "Javascript",
            color: "white"
        },
        {
            icon: <RiHtml5Line />,
            name: "HTML5",
            color: "white"
        },
        {
            icon: <TfiCss3 />,
            name: "CSS3",
            color: "white"
        },
        {
            icon: <FaGithub />,
            name: "Github",
            color: "white"
        },
        {
            icon: <FiFigma />,
            name: "Figma",
            color: "white"
        },
        {
            icon: <SiChakraui />,
            name: "ChakraUI",
            color: "white"
        },
        {
            icon: <SiReactrouter />,
            name: "React Router",
            color: "white"
        },
        {
            icon: <SiRedux />,
            name: "React Redux",
            color: "white"
        }
    ]

    return (
        <Box w={'100%'} margin={"auto"} height={'100vh'} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} id="skills">
            <Flex
                flexDirection={['column', '', 'row']}
            >
                <Box
                    bg={bg}
                    w={['100%', '', "50%"]}
                    h={'100vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDir={'column'}
                    p={['2rem', '', '4rem']}
                >
                    <Heading
                        fontFamily={'EB Garamond, serif'}
                        fontWeight={'400'}
                        borderBottom={'1px solid'}
                        pb={'2'}
                        mb={'3'}
                        display={'block'}
                        w={'100px'}
                    >Skills</Heading>
                    <Text
                        fontFamily={'EB Garamond, serif'}
                        fontWeight={'400'}
                        fontSize={[".7rem", "", "", "", "1.2rem"]}
                    >As a skilled web developer, I possess a strong proficiency in a variety of front-end web development technologies such as ReactJS, AJAX, HTML5, CSS, and Vanilla JavaScript. In addition, I have extensive experience working with UI frameworks including Chakra UI and Bootstrap, which allows me to create visually stunning and user-friendly web applications. My knowledge of state management tools such as Redux and routing frameworks like Router enables me to build complex and robust web applications. Additionally, I possess a solid foundation in back-end development with Java, which enables me to create comprehensive and functional web applications. With expertise in UI/UX design using Figma, I am well-equipped to create engaging user interfaces that enhance user experience. Overall, my diverse skill set and experience in web development enable me to create dynamic and polished web applications that exceed client expectations.</Text>
                </Box>
                <Box
                    bg={'#ffffff0d'}
                    margin={'1.8rem'}
                    backdropFilter={'blur(10px)'}
                    w={['100%', '', "50%"]}
                    display={['none', '', '', 'flex']}
                    justifyContent={'center'}
                    flexDir={'column'}
                    alignItems={'center'}
                >
                    <Grid
                        gap={'3rem'}
                        templateColumns={'repeat(3,1fr)'}
                    >
                        {
                            data.map((e) => {
                                return <GridItem
                                    fontSize={'3rem'}
                                    p={'20px'}
                                    borderRadius={'7px'}
                                    color={e.color}
                                > {e.icon}</GridItem>
                            })
                        }
                    </Grid>
                </Box>
            </Flex >
        </Box >
    )
}
