import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";
// This is one of our simplest components
// this page will be used to upload videos for sermons, special, and worship
// could even post a youtube video while live on youtube for people to stream through your site.
// Needs to add a unique link to this page so nobody spams it and posts random videos ---- MUST

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
     
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
       
      }}
    >
      <TextField fullWidth label="Title " id="fullWidth" onChange={(event) => setVideoData({...videoData, title:event.target.value})} required/>
      <TextField fullWidth label="Youtube Link " id="fullWidth" onChange={(event) => setVideoData({...videoData, link:event.target.value})} required/>
      <TextField fullWidth label="Description " id="fullWidth" onChange={(event) => setVideoData({...videoData, description:event.target.value})} required/>

    </Box>
    <Button onClick={onSubmit} sx={{ border: 'grey' }}>Save</Button>
    
    </div>
  );
}

export default AddVideo;
