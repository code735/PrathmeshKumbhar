import { useEffect, useState } from 'react';
import MobileMenu from './NavBar/MobileMenu';
import { Flex, useColorModeValue, useColorMode, Button, Box, Heading, Image } from '@chakra-ui/react';
import Nav from './NavBar/Nav';
import { CiSun } from 'react-icons/ci';
import { FiMoon } from 'react-icons/fi';
import SocialIcon from './NavBar/SocialIcon';
import Container from './Container';
import { motion } from 'framer-motion'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from './Redux/action';
import logo from './images/logo.svg'

function App() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#D9CAB3", "#092D3D")
  const icon = useColorModeValue(<FiMoon fontSize="1.3rem" />, <CiSun fontSize="1.5rem" />)
  const buttonbg = useColorModeValue("white", "#060116");
  var dispatch = useDispatch();

  return (
    <div className="App">
      <Box position={'fixed'} w={['100%']} margin={'auto'} py={'2'} zIndex='1' id='myDiv'>
        <motion.div>
          <Flex alignItems="center" justifyContent="space-between" bg={'transparent'} gap="10px" margin="0 auto" padding='5px 30px'>
            <Button display={["none", "", "", "block"]} bg={'black'} p={'2'}>
              <Image src={logo} ></Image>
            </Button>
            <Flex
              gap={'20px'}
            >
              <Button onClick={() => {
                toggleColorMode();
              }}
                px="2"
                bg={'black'}
                color={'white'}
              >
                {icon}
              </Button>
              <Nav />
            </Flex>
            <MobileMenu />
          </Flex>
        </motion.div>
      </Box>
      <Box>
        <SocialIcon />
      </Box>
      <Container />
    </div >
  );
}

export default App;