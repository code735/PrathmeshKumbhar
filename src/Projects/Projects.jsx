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
import stanzaliving from '../images/stanzaliving.png'
import nykaa from '../images/nykaa.png'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BsLink } from 'react-icons/bs'

export default function About() {
    var bg = useColorModeValue("wheat", "black")
    var cardbordercolor = useColorModeValue("black", "white")
    var cardColor = useColorModeValue("#ffd483", "#2d3748")
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
        {
            name: "StanzaLiving",
            img: stanzaliving,
            techstack: ['Javascript', 'AJAX', 'Google Maps API', "Bootstrap"],
            link: "https://code735.github.io/stanzaLiving/",
            githubLink: 'https://github.com/code735/stanzaLiving'
        },
        {
            name: "Nykaa",
            img: nykaa,
            techstack: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
            link: "https://code735.github.io/Nykaa_Clone/",
            githubLink: 'https://github.com/code735/Nykaa_Clone'
        },

    ]
    return (
        <Box
            w={'100%'}
            bg={bg}
            margin={"auto"}
            height={'100vh'}
            id="projects"
            p={'5'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Box>
                <Heading
                    as={'h1'}
                    fontSize={['1.5rem', '', '', '2.5rem']}
                    pb={'2rem'}
                    pt={'4rem'}
                    textAlign={'center'}
                >
                    Projects
                </Heading>
                <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', '', 'repeat(3, 1fr)']}
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
                                        display={['none', '', '', 'block']}
                                    ></Image>
                                    <Heading
                                        textAlign={'center'}
                                        fontSize={['1rem', '', '', '1.5rem']}
                                    >
                                        {el.name} Clone
                                    </Heading>
                                    <Flex
                                        flexWrap={'wrap'}
                                        gap={'10px'}
                                        justifyContent={'center'}
                                        display={['none', '', '', 'flex']}
                                    >
                                        {
                                            el.techstack.map((e) => {
                                                return <Text>{e}</Text>
                                            })
                                        }
                                    </Flex>
                                    <Flex
                                        alignItems={'center'}
                                        gap={'20px'}
                                        flexDir={['column', '', 'row']}
                                    >
                                        <a
                                            href={el.link}
                                            target='_blank'
                                        >
                                            <Button
                                                w={'100%'}
                                                height={'35px'}
                                                bg={'transparent'}
                                                color={textcolor}
                                                border={`1px solid ${textcolor}`}
                                                display={'flex'}
                                                alignItems={'center'}
                                                gap={'10px'}
                                            >
                                                <Text>Visit Site</Text>
                                                <ExternalLinkIcon />
                                            </Button>
                                        </a>
                                        <a
                                            href={el.link}
                                            target='_blank'
                                        >
                                            <Button
                                                w={'100%'}
                                                height={'35px'}
                                                bg={'transparent'}
                                                color={textcolor}
                                                border={`1px solid ${textcolor}`}
                                                display={'flex'}
                                                alignItems={'center'}
                                                gap={'10px'}
                                            >
                                                <Text p={'0'}>Repo Link</Text>
                                                <BsLink />
                                            </Button>
                                        </a>
                                    </Flex>
                                </Flex>
                            </GridItem>
                        })
                    }
                </Grid>
            </Box>
        </Box >
    )
}
