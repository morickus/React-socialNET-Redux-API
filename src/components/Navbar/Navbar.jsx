import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
      <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Messages</NavLink>
      <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
      <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
      <NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
      <hr />
      <NavLink to="/setting" className={s.item} activeClassName={s.active}>Setting</NavLink>
    </nav>
  );
}

export default Navbar;