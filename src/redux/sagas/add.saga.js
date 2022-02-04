import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* addItem(action) {
    try {

    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };

    yield axios.post('/api/add', action.payload, config);

    yield put({ type: 'GET_SHELF' });

    } catch (error) {
        console.log('Add item failed', error);
    }
}

function* addSaga() {
    yield takeLatest('ADD_ITEM', addItem);
}

export default addSaga;