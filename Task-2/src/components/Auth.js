import { useDispatch } from 'react-redux';
import { AuthActions } from '../store';
import classes from './Auth.module.css';


const Auth = () => {

  const dispatch = useDispatch();


  
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(AuthActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required />
            
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
