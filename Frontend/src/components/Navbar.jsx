import {  Link, NavLink } from 'react-router-dom'
import Styles from './Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useState } from 'react';

const Navbar = () => {

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const onLogoutHandler = () => {
    dispatch(logout());
    console.log("logout request");
  };

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
          <NavLink className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
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
        <div className={Styles.navbar3} onClick={handleMenuToggle}>
        </div>
      </div>
    </>
  );
}

export default Navbar
