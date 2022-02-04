
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* deleteItem(action) {
    console.log("in delete", action.payload);
  
    // delete element data to the server
    yield axios.delete(`/api/shelf/${action.payload}`);
  
    // Run the fetch
    yield put({
      type: "FETCH_ITEM",
    });
  }


  function* deleteSaga() {
    yield takeLatest("DELETE_ITEMS", deleteItem);
  }
export default deleteSaga;
