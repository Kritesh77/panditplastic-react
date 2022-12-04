import { SIGNUP_API, LOGIN_API } from "../constants/api";
import axios from "axios";

class UserAuth {
  constructor() {}
  signupWithEmail(data) {
    console.log("SERVICES: signupWithEmail", { data });
    return axios.post(SIGNUP_API, data);
  }
  signInWithEmail(data) {
    console.log("SERVICES: signInWithEmail", { data });
    return axios.post(LOGIN_API, data);
  }
}

const firebaseService = new UserAuth();
export default firebaseService;
