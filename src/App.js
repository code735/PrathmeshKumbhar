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
  const bg = useColorModeValue("#D9CAB3", "black")
  const icon = useColorModeValue(<FiMoon fontSize="1.3rem" />, <CiSun fontSize="1.5rem" />)
  const buttonbg = useColorModeValue("white", "#1A202C");
  var togglepreloader = useSelector(state => state.togglepreloader);
  var dispatch = useDispatch();

  return (
    <div className="App">
      <Box position={'fixed'} top={["83vh", "", "", "87vh"]} w={'100%'} zIndex='2'>
        <motion.div>
          <Flex alignItems="center" bg={bg} justifyContent="space-between" gap="10px" w={["90%", "50%", "30%", "250px"]} margin="10px auto" padding='5px'>
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
