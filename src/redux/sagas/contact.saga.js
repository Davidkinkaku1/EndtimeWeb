
// import { put, takeLatest } from "redux-saga/effects";
// import axios from 'axios';

// function* fetchVideoSaga(action) {
//     try {
//         // GET request from the backend
//         const response = yield axios.get('/');
//         console.log(`This is what the server sent: `, response.data);

//         // DISPATCH (PUT) the video to redux using existing SET_VIDEOS
//         yield put({ type: 'SET_VIDEOS', payload: response.data });
//     } catch (error) {
//         console.log(`ERROR fetching VIDEOS `, error);
//     }
// }

// function* addVideoSaga(action) {
//     // new Video will come in here as action.payload via the dispatch
//     // note: action.payload should be: { Video: 'Watermelon' }
//     try {
//         // POST the new Video to the backend
//         yield axios.post('/', action.payload);

//         // This will wake up the fetchVidesaga to refresh the store
//         yield put({ type: 'FETCH_VIDEOS' });
//     } catch (error) {
//         console.log(`Error POSTING VIDEOS `, error);
//     }
// }


// function* removeVideoSaga(action) {
//     // When we dispatch, we want to make sure they
//     // id (which is a number) will be attached to
//     // the action's payload, so we can grab it here
//     try {
//         const videoId = action.payload;
//         yield axios.delete(`/video/${videoId}`);
//         yield put({ type: 'FETCH_VIDEOS' });
//     } catch (error) {
//         console.log(`Error DELETING video`, error);
//     }
// }

// function* videoSaga() {
//     yield takeLatest("FETCH_VIDEOS", fetchVideoSaga);
//     yield takeLatest("ADD_VIDEOS", addVideoSaga);
//     yield takeLatest("DELETE_VIDEOS", removeVideoSaga);
//   }
  
//   export default videoSaga;