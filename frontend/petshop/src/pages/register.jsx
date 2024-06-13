// import { useState } from "react";
// import {Form, Col, Row, Stack, Button } from "react-bootstrap";
// import axios from 'axios';

// // const url = "https://panasonic-pioneers-062.onrender.com/pets/all"

// const Register = () => {
//     const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post("https://panasonic-pioneers-062.onrender.com/pets/add", user);
//         console.log("Success :", response);
//         console.log("Post request response:", response.data);
//         // localStorage.setItem("user", JSON.stringify(response.data.user));
//         setUser({ name: "", email: "", password: "", role: "" }); // Reset form after successful submission
//       } catch (error) {
//         console.log("Error during registration:", error.message);
//       }
//     };

//     const handleget = async()=>{
//         try {
//             console.log("Trigger get");
        
//             // setLoading(true);
//             const response = await axios.get("https://panasonic-pioneers-062.onrender.com/pets/all");
//             console.log("services post request :",response);
         
//             } catch (error) {
//                console.log("error while register :", error.message);

//             }
//     }

//     return ( 
//     <Form onSubmit={handleSubmit}>
//       <Row style={{height:"100vh", justifyContent:"center", padding:"10%"}}>
//        <Col xs={6}>
//        <Stack gap={3}>
//         <h2>Register</h2>
        
//         <Form.Control type="text" name="name"  value={user.name}  placeholder="Name" 
//         onChange={(e) => setUser({...user, name:e.target.value})}></Form.Control>

//         <Form.Control type="email" name="email" value={user.email}  placeholder="Email"
//         onChange={(e) => setUser({...user, email:e.target.value})}></Form.Control>

//         <Form.Control type="password" name="password" value={user.password}  placeholder="Password"
//         onChange={(e) => setUser({...user, password:e.target.value})}></Form.Control>

//         <Form.Control type="text"name="role" value={user.role}  placeholder="role"
//         onChange={(e) => setUser({...user, role:e.target.value})}></Form.Control>

//         <Button variant="primary" type="submit" >Register</Button>

//         <Button variant="primary" onClick={handleget} >get All Pets</Button>
    
//        </Stack>
//        </Col>
//       </Row>
//     </Form>
//  );
// }
 
// export default Register;

import { useState } from "react";
import { Form, Col, Row, Stack, Button } from "react-bootstrap";
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://petpals-n6tx.onrender.com/user/register", user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Post request response:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser({ name: "", email: "", password: "", role: "" }); // Reset form after successful submission
    } catch (error) {
      console.log("Error during registration:", error.message);
    }
  };

  const handleGet = async () => {
    try {
      console.log("Trigger get");

      const response = await axios.get("https://panasonic-pioneers-062.onrender.com/pets/all");
      console.log("Get request response:", response.data);
    } catch (error) {
      console.log("Error during get request:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row style={{ height: "100vh", justifyContent: "center", padding: "10%" }}>
        <Col xs={6}>
          <Stack gap={3}>
            <h2>Register</h2>

            <Form.Control type="text" placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })} />

            <Form.Control type="email" placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <Form.Control type="password" placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })} />

            <Form.Control type="text" placeholder="Role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })} />

            <Button variant="primary" type="submit">Register</Button>
            <Button variant="primary" onClick={handleGet}>Get All Pets</Button>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
