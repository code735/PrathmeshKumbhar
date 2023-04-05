import {
    Box,
    Grid,
    GridItem,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FiFigma } from 'react-icons/fi'
import { SiJavascript } from 'react-icons/si'
import { ImCss3, ImHtmlFive } from 'react-icons/im'
import { FaJava } from 'react-icons/fa'

export default function Skills() {
    var bg = useColorModeValue("wheat", "black")
    var data = [
        {
            icon: <GrReactjs />,
            name: "ReactJS"
        },
        {
            icon: <SiJavascript />,
            name: "Javascript"
        },
        {
            icon: <ImHtmlFive />,
            name: "HTML5"
        },
        {
            icon: <ImCss3 />,
            name: "CSS3"
        },
        {
            icon: <FaJava />,
            name: "Java"
        },
        {
            icon: <FiFigma />,
            name: "Figma"
        }
    ]

    return (
        <Box w={'100%'} border={[`10px solid ${bg}`, `30px solid ${bg}`,]} margin={"auto"} bg={'#000000c4'} height={'100vh'} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} id="skills">
            <Grid
                templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                gap={5}
            >
                {
                    data.map((el) => {
                        return <GridItem>
                            <Box
                                fontSize={'3rem'}
                                p={'3'}
                                border={'2px solid white'}
                                borderRadius={'10px'}
                                color={'white'}
                            >{el.icon}</Box>
                        </GridItem>
                    })
                }
            </Grid>
        </Box>
    )
}
