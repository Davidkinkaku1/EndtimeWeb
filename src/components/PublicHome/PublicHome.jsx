import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';



export default function PublicHome () {

    const history = useHistory();
    const dispatch = useDispatch();

 // when page loads, get all the data
//  useEffect(() => {
//   dispatch({ type: 'FETCH_' });
//   dispatch({ type: 'FETCH_' });
// }, []);

    return(
        <>
            <div className="welcome-modal">
                Modal with Pictures
            </div>
            <div className="vision-container">
                <h1> Our Vision </h1>
            </div>
            <div className="events-container">
                <h1> Upcoming Event </h1>
                <h3> Services Schedule: </h3>
                <h5> Sundays: 10 Am </h5>
                <h5> Wednesdays: 7 Pm </h5>
             </div>


        </>
    )
}