import {
    Box,
    GridItem,
    Grid,
    useColorModeValue,
    Image,
    Flex,
    Heading,
    Text,
    Button,
    useColorMode
} from '@chakra-ui/react'
import React from 'react'
import zostel from '../images/zostel.jpg'
import zoomcar from '../images/zoomcar.png'
import stanzaliving from '../images/stanzaliving.png'
import nykaa from '../images/nykaa.png'
import { useNavigate } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { BsGlobeCentralSouthAsia } from 'react-icons/bs'

export default function About() {
    var bg = useColorModeValue("wheat", "black")
    var cardcolor = useColorModeValue('#e7c991', '#1e1e1e')
    var card_text_color = useColorModeValue("black", 'white')
    var navigate = useNavigate();

    var projects = [
        {
            name: 'Zostel',
            logo: zostel,
            cardimg: "https://img.etimg.com/thumb/msid-72463946,width-1200,height-900,imgsize-1057355,resizemode-8,quality-100/prime/technology-and-startups/hostel-chain-pioneer-zostel-is-boxed-into-a-corner-explores-new-products-in-the-indian-travel-market.jpg",
            desc: "A pioneer of the new-age travel culture in India, Zostel is also the world's largest chain of experiential stays. Stay with us at 75+ destinations across India and Nepal, exploring remote locations, remote parts of famous locations, and unconventional experiences on your holiday. Our range of accommodations includes social backpacker hostels, cultural and private Zostel Homes, and luxurious Zostel Plus stays.",
            link: 'https://zostel-ten.vercel.app/',
            githubLink: 'https://github.com/code735/zostel'
        },
        {
            name: "Zoomcar",
            logo: zoomcar,
            cardimg: "https://officechai.com/wp-content/uploads/2016/09/l-zoomcar-2.jpg",
            desc: "Zoomcar is India’s largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the cheapest car rental options for all your needs!",
            link: "https://zoomcar-indol.vercel.app/",
            githubLink: 'https://github.com/code735/zoomcar'
        },
        {
            name: "StanzaLiving",
            logo: stanzaliving,
            cardimg: "https://images.livemint.com/img/2021/03/12/1600x900/Stanza_Living_Office_(1)_1568191516604_1615563265333.jpg",
            desc: "Stanza Living is the common brand name for Dtwelve Spaces Private Limited. It provides fully-managed shared living accommodations to students and young professionals.",
            link: "https://code735.github.io/stanzaLiving/",
            githubLink: 'https://github.com/code735/stanzaLiving'
        },
        {
            name: "Nykaa",
            logo: nykaa,
            cardimg: "https://media.glassdoor.com/lst2x/797724/fsn-ecommerce-ventures-office.jpg",
            desc: "Nykaa is an Indian e-commerce company, founded by Falguni Nayar in 2012 and headquartered in Mumbai. It sells beauty, wellness and fashion products across websites, mobile apps and 100+ offline stores. In 2020, it became the first Indian unicorn startup headed by a woman.",
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
            p={['0', '', '5']}
        >
            <Box>
                <Heading
                    as={'h1'}
                    fontSize={['2rem', '', '', '2.5rem']}
                    pb={'10px'}
                    pt={'2rem'}
                    textAlign={'center'}
                    fontFamily={'EB Garamond, serif'}
                    fontWeight={'400'}
                >
                    Projects
                </Heading>
                <Box borderBottom={'1px solid'} w={'150px'} margin={"auto"} mb={'2rem'}></Box>
                <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', '', '', 'repeat(4, 1fr)']}
                    gap={5}
                    p={['3', '3', '4']}
                >
                    {projects.map((el) => {
                        return (
                            <GridItem
                                w='100%'
                                bg={cardcolor}
                                alignItems={'center'}
                                px={['5', '', '', '7']}
                                py={['2', '5', '2', '3']}
                                color={card_text_color}
                            >
                                <Flex
                                    flexDir={'column'}
                                    gap={['0px', '', '', '10px']}
                                    p={['1', '', '', '2']}
                                >
                                    <Flex
                                        alignItems={'center'}
                                        gap={'15px'}
                                    >
                                        <Image
                                            src={el.logo}
                                            width={['30px', '25px', '40px']}
                                            borderRadius={'50%'}
                                        ></Image>
                                        <Text
                                            fontWeight={'bold'}
                                            fontSize={['1rem', '', '1.1rem']}
                                        >{el.name} Clone</Text>
                                    </Flex>
                                    <Text
                                        display={['none', '', '-webkit-box', '']}
                                        css={{ WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                                    >
                                        {el.desc}
                                    </Text>
                                    <Box
                                        display={['flex', '', '', 'flex']}
                                        alignItems={'center'}
                                        gap={'10px'}
                                        pt={['5', '', '2']}
                                        fontSize={['1rem', '', '1.2rem']}
                                    >
                                        <FaGithub
                                            onClick={() => {
                                                window.open(el.githubLink, "_blank")
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.cursor = "pointer"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.cursor = "normal"
                                            }}
                                        />
                                        <BsGlobeCentralSouthAsia
                                            onClick={() => {
                                                window.open(el.link, "_blank")
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.cursor = "pointer"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.cursor = "normal"
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </GridItem>
                        );
                    })}
                </Grid>

            </Box>
        </Box >
    )
}
