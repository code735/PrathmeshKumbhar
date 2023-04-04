import {
    Box,
    GridItem,
    Grid,
    useColorModeValue,
    Image,
    Flex,
    Heading,
    Text,
    Button
} from '@chakra-ui/react'
import React from 'react'
import zostel from '../images/zostel.jpg'
import zoomcar from '../images/zoomcar.png'

export default function About() {
    var bg = useColorModeValue("wheat", "black")
    var cardbordercolor = useColorModeValue("black", "white")
    var cardColor = useColorModeValue("white", "#2d3748")
    var btncolor = useColorModeValue("white", "grey")
    var textcolor = useColorModeValue("black", "white")

    var projects = [
        {
            name: 'Zostel',
            img: zostel,
            techstack: ['ReactJS', 'ChakraUI', 'AJAX', 'Axios', 'Redux', 'Google Map API'],
            link: 'https://zostel-ten.vercel.app/',
            githubLink: 'https://github.com/code735/zostel'
        },
        {
            name: "Zoomcar",
            img: zoomcar,
            techstack: ['ReactJS', 'AJAX', 'Router', 'Context API', 'Google Maps API'],
            link: "https://zoomcar-indol.vercel.app/",
            githubLink: 'https://github.com/code735/zoomcar'
        },

    ]
    return (
        <Box
            w={'100%%'}
            bg={bg}
            margin={"auto"}
            height={'100vh'}
            id="projects"
            p={'5'}
        >
            <Heading
                as={'h1'}
                fontSize={['1rem', '', '', '2rem']}
                py={'2rem'}
                textAlign={'center'}
            >
                Projects
            </Heading>
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', '', 'repeat(4, 1fr)']}
                gap={5}
                p={'4'}
            >
                {
                    projects.map((el) => {
                        return <GridItem
                            w='100%'
                            p={'5'}
                            bg={cardColor}
                            alignItems={'center'}
                            borderRadius={'10px'}
                        >
                            <Flex
                                flexDir={'column'}
                                alignItems={'center'}
                                gap={'20px'}
                                h={'100%'}
                                justifyContent={'space-between'}
                            >
                                <Image
                                    src={el.img}
                                    objectFit={'cover'}
                                    w={'60px'}
                                    h={'60px'}
                                    borderRadius={'100%'}
                                ></Image>
                                <Heading>
                                    {el.name} Clone
                                </Heading>
                                <Flex
                                    flexWrap={'wrap'}
                                    gap={'10px'}
                                    justifyContent={'center'}
                                >
                                    {
                                        el.techstack.map((e) => {
                                            return <Text>{e}</Text>
                                        })
                                    }
                                </Flex>
                                <a
                                    href={el.link}
                                    target='_blank'
                                >
                                    <Button
                                        w={'100%'}
                                        bg={'transparent'}
                                        color={textcolor}
                                        border={`1px solid ${textcolor}`}
                                    >
                                        Visit Site
                                    </Button>
                                </a>
                            </Flex>
                        </GridItem>
                    })
                }
            </Grid>
        </Box >
    )
}
