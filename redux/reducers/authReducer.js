import { SIGNIN_SUCCESS, SIGNOUT } from "constants/reduxConstants";

var initialState = {
  token: null,
  is_corporate: false,
  data: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        token: action.payload?.token,
        is_corporate: action.payload.is_corporate,
        data: action.payload?.data,
      };

    case SIGNOUT: {
      return initialState;
    }

    default:
      return state;
  }
};
export default authReducer;
