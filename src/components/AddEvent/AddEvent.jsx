import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// This is one of our simplest components
// this page will be used to upload videos for sermons, special, and worship
// could even post a youtube video while live on youtube for people to stream through your site.
// Needs to add a unique link to this page so nobody spams it and posts random videos ---- MUST


function AddEvent() {
//calling the dispatch for the axios calls
const dispatch = useDispatch();
const history = useHistory();
// Calling the admin user
const users = useSelector((store) => store.user);
//setting up the state for a new video on the click of this page.
const [eventData, setEventData] = useState({
    event_title: "",
    event_details: "",
    event_location: "",
  });

  const onSubmit = (event) => {
    console.log("A new video has been added, ", eventData);
    event.preventDefault();
    dispatch({
        // sending the new eventData to redux in the payload
      type: "ADD_VIDEOS",
      payload: eventData,
    });
    history.push("/user");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label>Theme</label>
        <input onChange={(event) => setEventData({...eventData, event_title:event.target.value})} placeholder="Title: Preacher/Singer/Song Leader" required></input>
        <label>Link to details or sign Up form</label>
        <input onChange={(event) => setEventData({...eventData, event_details:event.target.value})} placeholder="Link to the video from Youtube" required ></input>
        <label>Description</label>
        <input onChange={(event) => setEventData({...eventData, event_location:event.target.value})} placeholder="Special/Worship/Sermon" required></input>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AddEvent;
