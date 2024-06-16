import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the menu toggle
import Styles from './Navbar.module.css'; // Import your CSS module

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
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
            to="/Adoptpage"
            onClick={() => setMenuOpen(false)}
          >
            Adopt Pets
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          {isAuthenticated ? (
            <button className={Styles.Loginbutton} onClick={onLogoutHandler}>
              Logout
            </button>
          ) : (
            <NavLink className={Styles.Loginbutton} to="/Register" onClick={() => setMenuOpen(false)}>
              LOGIN
            </NavLink>
          )}
        </div>
        <div className={Styles.navbar3} onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes className="text-3xl text-orange-500" /> : <FaBars className="text-3xl text-orange-500" />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
