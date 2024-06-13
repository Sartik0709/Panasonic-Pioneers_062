
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Signup from '../components/Signup'

const Loginpage = () => {
  return (
    <>
   <div className='mt-16'>
   <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <Signup />
    </TabPanel>
  </TabPanels>
</Tabs>
   </div>
    </>
  )
}

export default Loginpage

