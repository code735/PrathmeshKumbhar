import MobileMenu from './NavBar/MobileMenu';
import { Flex, useColorModeValue, useColorMode, Button, Box } from '@chakra-ui/react';
import Nav from './NavBar/Nav';
import { CiSun } from 'react-icons/ci';
import { FiMoon } from 'react-icons/fi';
import SocialIcon from './NavBar/SocialIcon';
import Container from './Container';
import { motion } from 'framer-motion'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { PRELOADER_TOGGLE_FUNCTION } from './Redux/action';

function App() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#D9CAB3", "#092D3D")
  const icon = useColorModeValue(<FiMoon fontSize="1.3rem" />, <CiSun fontSize="1.5rem" />)
  const buttonbg = useColorModeValue("white", "#060116");
  var dispatch = useDispatch();
  var navbarbg = useSelector(state => state.navbarBg);


  return (
    <div className="App">
      <Box position={'fixed'} w={['100%']} margin={'auto'} zIndex='2' bg={navbarbg ? 'black' : 'transparent'}>
        <motion.div>
          <Flex alignItems="center" justifyContent="space-between" bg={'transparent'} gap="10px" margin="0 auto" padding='5px 30px'>
            <Nav />
            <Button onClick={() => {
              toggleColorMode();
              dispatch(PRELOADER_TOGGLE_FUNCTION(true));
            }} display={["", "", "", "none"]} px="2" bg={buttonbg}>
              {icon}
            </Button>
            <MobileMenu />
          </Flex>
        </motion.div>
      </Box>
      <Box>
        <SocialIcon />
      </Box>
      <Container />
    </div>
  );
}

export default App;
