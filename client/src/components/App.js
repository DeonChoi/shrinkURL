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
import ResponsiveMenu from 'react-responsive-navbar';


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
      {/* <nav className='navbar navbar-default navbar-expand-lg bg-light'>
        <ul className='navbar-nav mr-auto'>
          <Link to={'/api/'} className='navbar-brand nav-link'>
            <img src={brandLogo} className='brandLogo' alt='Brand Logo' height='75'/>
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
      </nav> */}
      <nav className='navbar navbar-default navbar-expand-lg bg-light'>

      <ul className='navbar-nav mr-auto float-left'>
          <Link to={'/api/'} className='navbar-brand nav-link'>
            <img src={brandLogo} className='brandLogo' alt='Brand Logo' height='75'/>
          </Link>
          
        </ul>
      <ResponsiveMenu
        menuOpenButton={<div>Menu</div>}
        menuCloseButton={<div>X</div>}
        changeMenuOn="600px"
       
        menu={
        
        <ul className='navbar-nav'>
          <Link to={'/api/urls/get'} className='navbar text-dark nav-link'>My URLs</Link>
          <Link to={'/api/urls/add'} className='navbar text-dark nav-link'>Create New URL</Link>
          { loggedIn
          ? null
          : <Link to={'/api/user/register'} className='navbar text-dark nav-link'>Register</Link>
          }
          
          { loggedIn
          ? <Link to={'/api/user/logout'} className='navbar text-dark nav-link' onClick={toggleLoggedIn}>Logout</Link>
          : <Link to={'/api/user/login'} className='navbar text-dark nav-link' >Login</Link>
          }
          
        </ul>

        }>
      
      </ResponsiveMenu>
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

      <footer className='text-center fixed-bottom bg-light font-weight-light text-monospace'>Made By <a href='https://deonchoi.com/' target='_blank' rel='noopener noreferrer'>Deon</a> <a href='https://github.com/deonchoi' target='_blank' rel='noopener noreferrer'>Choi</a></footer>
    </Router>
  );
}

export default App;
