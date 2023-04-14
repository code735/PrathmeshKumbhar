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
import { GrReactjs } from 'react-icons/gr'
import { FiFigma } from 'react-icons/fi'
import { SiChakraui, SiRedux, SiReactrouter } from 'react-icons/si'
import { TfiCss3 } from 'react-icons/tfi'
import { RiHtml5Line } from 'react-icons/ri'
import { FaJava } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

export default function Skills() {
    var bg = useColorModeValue("wheat", "black")
    var data = [
        {
            icon: <GrReactjs />,
            name: "ReactJS",
            color: "black"
        },
        {
            icon: <IoLogoJavascript />,
            name: "Javascript",
            color: "black"
        },
        {
            icon: <RiHtml5Line />,
            name: "HTML5",
            color: "black"
        },
        {
            icon: <TfiCss3 />,
            name: "CSS3",
            color: "black"
        },
        {
            icon: <FaJava />,
            name: "Java",
            color: "black"
        },
        {
            icon: <FiFigma />,
            name: "Figma",
            color: "black"
        },
        {
            icon: <SiChakraui />,
            name: "ChakraUI",
            color: "black"
        },
        {
            icon: <SiReactrouter />,
            name: "React Router",
            color: "black"
        },
        {
            icon: <SiRedux />,
            name: "React Redux",
            color: "black"
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
                    margin={'1.5rem'}
                    backdropFilter={'blur(10px)'}
                    w={['100%', '', "50%"]}
                    display={'flex'}
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
                                    color={e.color}
                                    fontSize={'3rem'}
                                    bg={'white'}
                                    p={'20px'}
                                    borderRadius={'7px'}
                                > {e.icon}</GridItem>
                            })
                        }
                    </Grid>
                </Box>
            </Flex >
        </Box >
    )
}
