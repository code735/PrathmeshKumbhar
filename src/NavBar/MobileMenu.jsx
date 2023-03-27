import React from "react"
import {
    Flex,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    IconButton,
    DrawerHeader,
    Heading,
    Box,
    useColorModeValue
} from "@chakra-ui/react"
import { Tooltip } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


export default function MobileMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const buttonbg = useColorModeValue("white", "#1A202C");
    const bg = useColorModeValue("#D9CAB3", "#495579")

    return (
        <>
            <Box display={["", "", "", "none"]} justifyContent="flex-end">
                <Button as={IconButton} onClick={onOpen} icon={<HamburgerIcon />} bg={buttonbg} />
                <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent bg={bg}>
                        <DrawerHeader borderBottomWidth='1px' border='none' display="flex" justifyContent="flex-end" alignItems="center" p="2">
                            <Button as={IconButton} fontSize="1rem" p='0' bg={'transparent'} fontWeight='bold' onClick={onClose} icon={<CloseIcon />} />
                        </DrawerHeader>
                        <DrawerBody>
                            <Flex flexDirection="column" spacing="6" gap="20px" justifyContent={"center"} alignItems={"flex-start"} color="white">
                                <a href="#home">
                                    <Heading as='h1' noOfLines={1} width="100%">
                                        Home
                                    </Heading>
                                </a>
                                <a href="#about">
                                    <Heading as='h1' noOfLines={1} width="100%">
                                        About
                                    </Heading>
                                </a>
                                <Heading as='h1' noOfLines={1} width="100%">
                                    Project
                                </Heading>
                                <Heading as='h1' noOfLines={1} width="100%" paddingBottom="20px">
                                    Skills
                                </Heading>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}