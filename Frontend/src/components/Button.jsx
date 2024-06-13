import { Button, useDisclosure } from "@chakra-ui/react"
import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Signup from "./Signup"
import Login from "./Login"

const ButtonLogin = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
   <>
  <Button onClick={onOpen} style={{width:'auto'}} bgColor='tomato'>Join</Button>
       
  
       <Modal
        //  initialFocusRef={initialRef}
        //  finalFocusRef={finalRef}
         isOpen={isOpen}
         onClose={onClose}
       >
         <ModalOverlay />
         <ModalContent>
           <ModalHeader>Login/ Signup</ModalHeader>
           <ModalCloseButton />
           <ModalBody pb={6}>
           <Tabs variant='soft-rounded' colorScheme='blue'>
                  <TabList>
                        <Tab>Log-in</Tab>
                        <Tab>Sign-up</Tab>
                  </TabList>
                <TabPanels>
                   <TabPanel>
                        <Login />
                   </TabPanel>
                   <TabPanel>
                        <Signup/>     
                   </TabPanel>
                </TabPanels>
          </Tabs>
             
           </ModalBody>
 
           
         </ModalContent>
       </Modal>
       </>
  )
}

export default ButtonLogin
