import { BASE_URL } from "constants/constants";
import { SIGNIN, SIGNUP, SIGNOUT } from "constants/reduxConstants";
import { call, put } from "redux-saga/effects";
import { signInSuccess } from "redux/actions/authActions";
import firebaseService from "services/firebaseServices";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function* authSaga({ type, payload }) {
  console.log("authSaga type", type);
  switch (type) {
    case SIGNUP:
      {
        try {
          console.log("AUTHSAGA SIGNIN", { payload });
          let res = yield call(
            firebaseService.signupWithEmail.bind(firebaseService),
            payload
          );
          yield put(signInSuccess(res.data));
        } catch (e) {
          console.log("SIGNIN ERROR IN AUTHSAGA", e);
          toast.error(e.response.data.error.join(". "));
        }
      }
      break;
    case SIGNIN:
      {
        try {
          console.log("AUTHSAGA SIGNIN", { payload });
          let res = yield call(
            firebaseService.signInWithEmail.bind(firebaseService),
            payload
          );
          yield put(signInSuccess(res.data));
          toast.success("Signin Success");
        } catch (e) {
          console.log("SIGNIN ERROR IN AUTHSAGA", e);
          toast.error(e.response.data.error.join(". "));
        }
      }
      break;
    default: {
      console.log("DEFAULT CASE");
    }
  }
}
export default authSaga;
