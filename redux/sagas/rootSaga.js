import { all, fork, takeLatest } from "redux-saga/effects";
import authSaga from "./userAuthService";
import * as action from "constants/reduxConstants";

function* rootSaga() {
  yield takeLatest([action.SIGNIN, action.SIGNUP], authSaga);
}

export default rootSaga;
