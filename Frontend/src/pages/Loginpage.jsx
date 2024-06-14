import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Signup from "../components/Signup";
import LoginComponent from "../components/LoginComponent";

const Loginpage = () => {
  return (
    <>
      <div className="mt-16">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>LOG-IN</Tab>
            <Tab>SIGN-UP</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginComponent />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Loginpage;
