import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* upload(action) {
    try {

    yield axios.post('/api/add', action.payload);
    console.log('action.payload is:', action.payload);

    yield put({ type: 'GET_SHELF' });

    } catch (error) {
        console.log('Add item failed', error);
    }
}

function* uploadSaga() {
    yield takeLatest('UPLOAD', upload);
}

export default uploadSaga;