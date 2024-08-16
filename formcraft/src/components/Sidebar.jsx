import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) => 
            isActive ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.inactive}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) => 
            isActive ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.inactive}`
          }
        >
          Form
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

