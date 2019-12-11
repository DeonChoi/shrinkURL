import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import '../styles/App.css';
import brandLogo from '../images/navbarBrand.png';
import Home from './Home';
import MyURL from './MyURL';
import CreateURL from './CreateURL';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <Router basename={'/'}>
      <nav className='navbar navbar-default navbar-expand-lg bg-light'>
        <ul className='navbar-nav mr-auto'>
          <Link to={'/'} className='navbar-brand nav-link'>
            <img src={brandLogo} alt='Brand Logo' height='75'/>
          </Link>
          <Link to={'/urls'} className='navbar text-dark nav-link'>My URLs</Link>
          <Link to={'/urls/add'} className='navbar text-dark nav-link'>Create New URL</Link>
        </ul>
        <ul className='navbar-nav'>
          <Link to={'/user/register'} className='navbar text-dark nav-link'>Register</Link>
          <Link to={'/user/login'} className='navbar text-dark nav-link'>Login</Link>
        </ul>
        
        {/* <Link to={'/'} class='navbar-brand'>Log Out</Link> */}
      </nav>


    <main>
      <Route exact path='/' component={Home} />
      <Route exact path='/urls' component={MyURL} />  
      <Route exact path='/urls/add' component={CreateURL} />
      <Route path='/user/register' component={Register} />
      <Route path='/user/login' component={Login} />  
    </main>

    </Router>
  );
}

export default App;
