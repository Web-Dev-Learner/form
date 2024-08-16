import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          Form
        </div>
        <div className={styles.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} ${styles.inactive}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} ${styles.inactive}`
            }
          >
            Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

