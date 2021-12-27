
import { put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* fetchGallerySaga(action) {
    try {
        // GET request from the backend
        const response = yield axios.get('/gallery');
        console.log(`This is what the server sent: `, response.data);

        // DISPATCH (PUT) the GALLERY to redux using existing SET_GALLERY
        yield put({ type: 'SET_GALLERY', payload: response.data });
    } catch (error) {
        console.log(`ERROR fetching GALLERY `, error);
    }
}

function* addGallerySaga(action) {
    // new Gallery will come in here as action.payload via the dispatch
    // note: action.payload should be: { Gallery: 'Watermelon' }
    try {
        // POST the new Gallery to the backend
        yield axios.post('/gallery', action.payload);

        // This will wake up the fetchGALLERYaga to refresh the store
        yield put({ type: 'FETCH_GALLERY' });
    } catch (error) {
        console.log(`Error POSTING Gallery `, error);
    }
}


function* removeGallerySaga(action) {
    // When we dispatch, we want to make sure they
    // id (which is a number) will be attached to
    // the action's payload, so we can grab it here
    try {
        const galleryId = action.payload;
        yield axios.delete(`/gallery/${galleryId}`);
        yield put({ type: 'FETCH_GAllERY' });
    } catch (error) {
        console.log(`Error DELETING gallery`, error);
    }
}

function* gallerySaga() {
    yield takeLatest("FETCH_GALLERY", fetchGallerySaga);
    yield takeLatest("ADD_GALLERY", addGallerySaga);
    yield takeLatest("DELETE_GALLERY", removeGallerySaga);
  }
  
  export default gallerySaga;