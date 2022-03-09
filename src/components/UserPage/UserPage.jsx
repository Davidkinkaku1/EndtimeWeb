import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // calling the History to make a push to another page.
  const history = useHistory();

 // when page loads, get all the data
//  useEffect(() => {
//   dispatch({ type: 'FETCH_' });
//   dispatch({ type: 'FETCH_' });
// }, []);


  return (
   
    <div className="container">
      <di>
        <h2>Welcome, {user.username}!</h2>
         <p>Your ID is: {user.id}</p>
         <button>Add A video</button>
         <button>Add A Picture</button>
         <button>Add An Event</button>
      </di> 
      <br/>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
