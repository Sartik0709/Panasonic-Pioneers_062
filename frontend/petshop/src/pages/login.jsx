// import { useContext } from "react";
// import {Form, Col, Row, Stack, Button } from "react-bootstrap";
// import { AuthContext } from "../contextApi/AuthContext";

// const Login = () => {
// const{LoginUser,loginInfo,loginLoading,loginError,updateLoginInfo} = useContext(AuthContext);

//     return ( 
//         <Form onSubmit={LoginUser}>
//           <Row style={{height:"100vh", justifyContent:"center", padding:"10%"}}>
//            <Col xs={6}>
//            <Stack gap={3}>
//             <h2>Login</h2>

//             <Form.Control type="email"  placeholder="Email"
//             onChange={(e)=> updateLoginInfo({...loginInfo , email :e.target.value})}></Form.Control>

//             <Form.Control type="password"  placeholder="Password"
//             onChange={(e)=> updateLoginInfo({...loginInfo , password :e.target.value})}></Form.Control>

//             <Button variant="primary" type="submit">
//                {loginLoading ? "logged" : "Login"} 
//             </Button>
//             {loginError && (<p>{loginError}</p>)}
//            </Stack>
//            </Col>
//           </Row>
//         </Form>      
//      );
// }
 
// export default Login;