import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={s.header}>
      <div className={s.logo}><img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png' /></div>
      <div className={s.loginBlock}>
        {props.isAuth
          ?
          <>
            <span>{props.login}</span>
            <br />
            <button className={s.buttonAuth} onClick={props.logout}>Logout</button>
          </>
          : <NavLink className={s.buttonAuth} to={'./login'}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;