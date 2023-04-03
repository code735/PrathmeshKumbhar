import GitHubCalendar from 'react-github-calendar'
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'

export function GithubContributions() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                onClick={onOpen}
                bg={'transparent'}
                borderRadius={'0'}
                border={'2px solid white'}
                color={'white'}
                _hover={{
                    bg: "white",
                    color: "black"
                }}
                letterSpacing={'3px'}
            >GitHub Contributions</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius={'0'}>
                    <ModalHeader>Github Contributions Last Year</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <GitHubCalendar username='code735' />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose} borderRadius={'0'}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}