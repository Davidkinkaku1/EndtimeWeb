import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import LabTabs from './AddNew';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const videos =useSelector((store) => store.videos)
  const SpecialVideo = useSelector((store) => store.SpecialVideos)
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
         <p>Your ID is: {user.id} you have admin privileges, any changes you make can affect the live version of the site.</p>
         <button onClick={() =>history.push('/newVideo')}>Add A video</button> 
         <button onClick={() =>history.push('/newImage')}>Add A Picture</button>
         <button onClick={() =>history.push('/newEvent')}>Add An Event</button>
      </di> 
    
     
      <hr/>
     
  
 
     <LabTabs videos={videos} SpecialVideo={SpecialVideo} />
     <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
