import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">End Time Tabernacle </h2> <br/>
        
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

           <Link className="navLink" to="/user">
              Home
            </Link>
            <Link className="navLink" to="/info">
             Services
            </Link>
            <Link className="navLink" to="/services">
              About Us
            </Link>
            <Link className="navLink" to="/contacts">
              Cantact Us
            </Link>
       {/* If a user is logged in, show these links */}
       {user.id && (
          <>
          
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
