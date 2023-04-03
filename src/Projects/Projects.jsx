import {
    Box,
    Heading,
    VStack,
    useColorModeValue,
    Tab,
    Tabs,
    TabPanels,
    TabPanel,
    TabList
} from '@chakra-ui/react'
import React from 'react'

export default function About() {
    var bg = useColorModeValue("wheat", "black")
    var borderclr = useColorModeValue("black", "white")
    var projects = [
        {
            name: 'Zostel'
        }
    ]
    return (
        <Box
            w={'100%%'}
            bg={bg}
            margin={"auto"}
            height={'100vh'}
            id="projects"
        >
            <VStack
                py={'10'}
                fontFamily={'EB Garamond, serif'}
            >
                <Heading
                    fontSize={["1.7rem", "", "", "", "2.5rem"]}
                    fontFamily={'EB Garamond, serif'}
                    textAlign={'center'}
                    py={'5'}
                    fontWeight={'400'}
                >
                    Projects
                </Heading>
                <Box color={borderclr}>
                    <svg width="106" height="24" viewBox="0 0 106 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="12.5" x2="105" y2="12.5" stroke={borderclr} />
                        <path d="M0.5 12.5L8 1.5L14 12.5" stroke={borderclr} />
                        <path d="M27 13L34.5 2L40.5 13" stroke={borderclr} />
                        <path d="M53 13L60.5 2L66.5 13" stroke={borderclr} />
                        <path d="M79 13L86.5 2L92.5 13" stroke={borderclr} />
                        <path d="M27.5 12L20 23L14 12" stroke={borderclr} />
                        <path d="M53.5 12L46 23L40 12" stroke={borderclr} />
                        <path d="M79.5 12L72 23L66 12" stroke={borderclr} />
                        <path d="M105.5 12L98 23L92 12" stroke={borderclr} />
                    </svg>
                </Box>
            </VStack>
            <Tabs
                variant='soft-rounded'
                colorScheme='green'
                w={['', '', '', '90%']}
                margin={'auto'}
                border={`1px solid ${borderclr}`}
            >
                <TabList
                    borderBottom={`1px solid ${borderclr}`}
                    p={'4'}
                >
                    <Tab>Frontend</Tab>
                    <Tab>Fullstack</Tab>
                </TabList>
                <TabPanels p={'4'}>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>
                        <h3>Fullstack Projects will be added soon!</h3>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box >
    )
}
