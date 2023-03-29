import { Flex, Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsSlack } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'
import { NavLink } from 'react-router-dom'

export default function SocialIcon() {
    const color = useColorModeValue("#11468F", "white")
    const iconColor = useColorModeValue("white", "black")
    const bg = useColorModeValue("black", "white")
    const navbarbg = useColorModeValue("white", "black");

    return (
        <div>
            <Flex justifyContent="center" position={"fixed"} px='1' bottom={['15px', '30px']} width={'100%'} py={'10px'} zIndex={'1'}>
                <Flex alignItems="center" gap='10px' left='0'>

                    <NavLink to='https://github.com/code735' style={{ borderRadius: "50%", padding: "10px", background: navbarbg }} target='_blank'>
                        <BsGithub color={bg} />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/prathmesh-kumbhar-54287b1a3" style={{ borderRadius: "50%", padding: "10px", background: navbarbg }} target='_blank'>
                        <ImLinkedin2 color={bg} />
                    </NavLink>
                    <NavLink to="https://app.slack.com/client/T03EXRYG70E/C04UZN7JT4H/rimeto_profile/U04P7EJ4JNP" style={{ borderRadius: "50%", padding: "10px", background: navbarbg }} target='_blank'>
                        <BsSlack color={bg} />
                    </NavLink>

                </Flex>
            </Flex>
        </div >
    )
}
