
import { put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* fetchEventsSaga(action) {
    try {
        // GET request from the backend
        const response = yield axios.get('/events');
        console.log(`This is what the server sent: `, response.data);

        // DISPATCH (PUT) the events to redux using existing SET_EVENTS
        yield put({ type: 'SET_EVENTS', payload: response.data });
    } catch (error) {
        console.log(`ERROR fetching Events `, error);
    }
}

function* addEventSaga(action) {
    // new event will come in here as action.payload via the dispatch
    // note: action.payload should be: { Event: 'Watermelon' }
    try {
        // POST the new Event to the backend
        yield axios.post('/events', action.payload);

        // This will wake up the fetchEventSaga to refresh the store
        yield put({ type: 'FETCH_EVENTS' });
    } catch (error) {
        console.log(`Error POSTING EVENTS `, error);
    }
}


function* removeEventSaga(action) {
    // When we dispatch, we want to make sure they
    // id (which is a number) will be attached to
    // the action's payload, so we can grab it here
    try {
        const eventId = action.payload;
        yield axios.delete(`/events/${eventId}`);
        yield put({ type: 'FETCH_EVENTS' });
    } catch (error) {
        console.log(`Error DELETING Event`, error);
    }
}

function* eventsSaga() {
    yield takeLatest("FETCH_EVENTS", fetchEventsSaga);
    yield takeLatest("ADD_EVENTS", addEventSaga);
    yield takeLatest("DELETE_EVENTS", removeEventSaga);
  }
  
  export default eventsSaga;
  