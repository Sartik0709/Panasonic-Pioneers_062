
import {  Button, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useState } from "react";
const Login = () => {

    //show password 
    const [show, setShow] = useState(false);
    //function for showing and hiding the password
    const handleClick = () => setShow(!show);

    const handellogin=()=>{

    }
  return (
    <>
    <Stack spacing={5}>
        <label>Enter your Email</label>
        <Input placeholder='Email'  />

        <Stack spacing={1}>
          <label>Enter your password</label>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password' 
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>

        <Button colorScheme='teal' variant='solid' onClick={handellogin}>
          LOGIN
        </Button>
        <Button colorScheme='teal' variant='outline'>
          Forgot Password
        </Button>   
   </Stack>
    </>
  )
}

export default Login
