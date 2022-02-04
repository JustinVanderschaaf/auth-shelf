import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* getShelf(action) {
    console.log('inshelfsaga');
    try {
        const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        };
        // send the action.payload as the body
        // the config includes credentials which
        // allow the server session to recognize the user
        let shelf = yield axios.get('/api/shelf', config);
        yield put({
            type: 'SET_SHELF',
            payload: shelf.data
        })
    } catch (error) {
        console.log('Error with user login:', error);
    }
}

function* getShelfSaga() {
    yield takeLatest('GET_SHELF', getShelf);
}

export default getShelfSaga;
