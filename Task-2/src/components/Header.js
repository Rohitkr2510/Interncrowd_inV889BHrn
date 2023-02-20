import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from '../store';

import classes from './Header.module.css';

const Header = () => {
   
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(AuthActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>InternCrowd</h1>
      {
        isAuth &&
        <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>


      }
      
    </header>
  );
};

export default Header;
