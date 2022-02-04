import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* deleteItem(action) {
  console.log("in delete", action.payload);

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    // delete element data to the server
    yield axios.delete(`/api/shelf/${action.payload}`, config);

    // Run the fetch
    yield put({
      type: "GET_SHELF",
    });
  } catch (error) {
    console.log("User delete request failed", error);
  }
}

function* deleteSaga() {
  yield takeLatest("DELETE_ITEM", deleteItem);
}

export default deleteSaga;
