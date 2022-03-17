import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// This is one of our simplest components
// this page will be used to upload videos for sermons, special, and worship
// could even post a youtube video while live on youtube for people to stream through your site.
// Needs to add a unique link to this page so nobody spams it and posts random videos ---- MUST


function AddVideo() {
//calling the dispatch for the axios calls
const dispatch = useDispatch();
const history = useHistory();
// Calling the admin user
const users = useSelector((store) => store.user);
//setting up the state for a new video on the click of this page.
const [videoData, setVideoData] = useState({
    link: "",
    title: "",
    description: "",
  });

  const onSubmit = (event) => {
    console.log("A new video has been added, ", videoData);
    event.preventDefault();
    dispatch({
        // sending the new videoData to redux in the payload
      type: "ADD_VIDEOS",
      payload: videoData,
    });
    history.push("/user");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label>Title of the Sermon/Worship/Special</label>
        <input onChange={(event) => setVideoData({...videoData, title:event.target.value})} placeholder="Title: Preacher/Singer/Song Leader" required></input>
        <label>Your video Youtube Link</label>
        <input onChange={(event) => setVideoData({...videoData, link:event.target.value})} placeholder="Link to the video from Youtube" required ></input>
        <label>Description</label>
        <input onChange={(event) => setVideoData({...videoData, description:event.target.value})} placeholder="Special/Worship/Sermon" required></input>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AddVideo;
