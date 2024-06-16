import {  Link, NavLink, useNavigate } from 'react-router-dom'
import Styles from './Navbar.module.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Use default empty object to prevent errors when users is null or undefined
  const  {users}  = useSelector(state => state.loginData);
  console.log("navbar :", users);

  const [isAuthenticated, setIsAuthenticated] = useState(!!users);
  console.log("isAuthenticated :",isAuthenticated);
  const onLogoutHandler = () => {
    setIsAuthenticated(false);
    navigate('/home');
  };

  useEffect(() => {
    setIsAuthenticated(!!users);
  }, [users]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={Styles.navbar}>
        <div>
          <Link to="/">
            <div className={Styles.navbar1}></div>
          </Link>
        </div>
        <div className={`${Styles.navbar2} ${menuOpen ? Styles.showMenu : ''}`}>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
            to="/Home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
            to="/Adoptpage"
          >
            Adopt Pets
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
            to="/about"
          >
            About
          </NavLink>
          {/* Logout/Login Switch */}
          {isAuthenticated ? (
            <button className={Styles.Loginbutton} onClick={onLogoutHandler}>
              Logout
            </button>
          ) : (
            <NavLink className={Styles.Loginbutton} to="/Register">
              LOGIN
            </NavLink>
          )}
        </div>
        <div className={Styles.navbar3} onClick={handleMenuToggle}></div>
      </div>
    </>
  );
}

export default Navbar;






// const Navbar = () => {

//   const [menuOpen, setMenuOpen] = useState(false);

//   const { users} = useSelector(state => state.loginData);
//   let mail  = users.email || "" ;
//   const [isAuthenticated, setIsAuthenticated] = useState(mail);

//   const onLogoutHandler = () => {
//     setIsAuthenticated("");
//   };

//   useEffect(() => {
//     onLogoutHandler();
//   }, []);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <div className={Styles.navbar}>
//         <div>
//           <Link to="/">
//             <div className={Styles.navbar1}></div>
//           </Link>
//         </div>
//         <div className={`${Styles.navbar2} ${menuOpen ? Styles.showMenu : ''}`}>
//           <NavLink
//             className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
//             to="/Home"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
//             to="/Adoptpage"
//           >
//             Adopt Pets
//           </NavLink>
//           <NavLink className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
//               to="/services"
//             >
//               Services
//             </NavLink>
//           <NavLink
//             className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
//             to="/about"
//           >
//             About
//           </NavLink>
//           {/* logout login switch */}
//           {isAuthenticated ? (
//             <button className={Styles.Loginbutton} onClick={onLogoutHandler}>
//               Logout
//             </button>
//           ) : (
//             <NavLink className={Styles.Loginbutton} to="/Register">
//               LOGIN
//             </NavLink>
//           )}
//         </div>
//         <div className={Styles.navbar3} onClick={handleMenuToggle}>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar
