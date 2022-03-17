import React from 'react';
import ReactPlayer from "react-player"
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// This is one of our simplest components
// this page will have all our sermons and events that can come accross
// Also have the link to the live sessions 


function InfoPage() {

//Calling the reducers to bring all the stores and the data for videos
const videosStore = useSelector((store) => store.videos);
const dispatch = useDispatch();
const history = useHistory();
// const specialSongs = Make the backend do a query to get the data it needs. 
// const worshpServices =
// const sermons 
console.log(videosStore)
// calling videos on pageLoad
 useEffect(() => {
    dispatch({ type: "FETCH_VIDEOS" });
  }, []);


  return (
    <div className="container">
      <button onClick={()=> specialSongs()}>Specials</button>
      <button onClick={()=> worshipServices()}>Worship</button>
      <button onClick={()=> sermons()}>Sermons</button>
      <br/>
      <hr/>

     { videosStore.map((video,i) => (
       <div key={i}> 
       <p>Title: {video.title}</p>
       <p>{video.description}</p>
        <ReactPlayer  url={video.link}/>
       </div>
     ))}
      
    
    </div>
  );
}

export default InfoPage;
