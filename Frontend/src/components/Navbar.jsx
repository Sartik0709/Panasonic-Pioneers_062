import {  Link, NavLink } from 'react-router-dom'
import Styles from './Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(logout());
    console.log("logout request");
  };



  return (
   <>
<div  className={Styles.navbar}>


<div>

<Link to="/">
<div className={Styles.navbar1}></div>
</Link>
   
</div>
<div className={Styles.navbar2}>
  
{/* <NavLink style={({isActive})=>{ 
return isActive?{color:"#5a8a9a"}:{color:"black"}}} to="/contactus">Contact us</NavLink> */}
<NavLink style={({isActive})=>{ 
return isActive?{color:"#fea910"}:{color:"black"}}} to="/Home">Home</NavLink>
<NavLink style={({isActive})=>{ 
return isActive?{color:"#fea910"}:{color:"black"}}} to="/Adoptpage">Adopt Pets</NavLink>
<NavLink style={({isActive})=>{ 
return isActive?{color:"#fea910"}:{color:"black"}}}  to="/services">Services</NavLink>
<NavLink style={({isActive})=>{ 
return isActive?{color:"#fea910"}:{color:"black"}}}  to="/Community">Community</NavLink>
{isAuthenticated ? (
  <button className={Styles.Loginbutton} onClick={onLogoutHandler}>
    Logout
  </button>
) : (
  <NavLink className={Styles.Loginbutton} to="/Register">
    Register
  </NavLink>
)}

</div>
 
<div className={Styles.navbar3}>menu</div>
</div>   
   </>
  )
}

export default Navbar
