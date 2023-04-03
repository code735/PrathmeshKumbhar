import {
    Box,
    Heading,
    VStack,
    useColorModeValue,
    Tab,
    TabIndicator,
    Tabs,
    TabPanels,
    TabPanel,
    TabList
} from '@chakra-ui/react'
import React from 'react'

export default function About() {
    var bg = useColorModeValue("wheat", "black")
    var borderclr = useColorModeValue("black", "white")
    return (
        <Box
            w={'100%%'}
            bg={bg}
            margin={"auto"}
            height={'100vh'}
            id="projects"
            fontFamily={'EB Garamond, serif'}
        >
            <Heading
                fontSize={[".7rem", "", "", "", "2.5rem"]}
                fontFamily={'EB Garamond, serif'}
                textAlign={'center'}
                py={'5'}
                fontWeight={'400'}
            >
                Projects I did to learn this technologies
            </Heading>
            <Box
                border={`1px solid ${borderclr}`}
            ></Box>
            <Tabs position="relative" variant="unstyled" w={'100%'}>
                <TabList>
                    <Tab>React JS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>HTML</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box >
    )
}
