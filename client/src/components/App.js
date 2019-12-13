import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../styles/App.css';
import brandLogo from '../images/navbarBrand.png';
import Home from './Home';
import MyURL from './MyURL';
import CreateURL from './CreateURL';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect( () => {
    toggleLoggedIn();
  }, []);

  const toggleLoggedIn = () => {
    localStorage.getItem('auth-token') ? setLoggedIn(true) : setLoggedIn(false);
  };

  return (
    <Router basename={'/'}>
      <nav className='navbar navbar-default navbar-expand-lg bg-light'>
        <ul className='navbar-nav mr-auto'>
          <Link to={'/api/'} className='navbar-brand nav-link'>
            <img src={brandLogo} alt='Brand Logo' height='75'/>
          </Link>
          <Link to={'/api/urls/get'} className='navbar text-dark nav-link'>My URLs</Link>
          <Link to={'/api/urls/add'} className='navbar text-dark nav-link'>Create New URL</Link>
        </ul>
        <ul className='navbar-nav'>
          
          { loggedIn
          ? null
          : <Link to={'/api/user/register'} className='navbar text-dark nav-link'>Register</Link>
          }
          
          { loggedIn
          ? <Link to={'/api/user/logout'} className='navbar text-dark nav-link' onClick={toggleLoggedIn}>Logout</Link>
          : <Link to={'/api/user/login'} className='navbar text-dark nav-link' >Login</Link>
          }
          
        </ul>
      </nav>


    <main>
      <Route exact path='/api/' component={Home} />
      <Route exact path='/api/urls/get' component={MyURL} />  
      <Route exact path='/api/urls/add' component={CreateURL} />
      <Route exact path='/api/user/register' component={Register} />

      { loggedIn
      ? <Route path='/api/user/logout' component={Logout} />  
      : <Route path='/api/user/login' component={Login} />  
      }

    </main>

    </Router>
  );
}

export default App;
