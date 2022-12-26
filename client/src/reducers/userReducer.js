export const registerNewUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQ":
      return {
        ...state,
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: "User Registration Failed",
      };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQ":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: "User Login Failed",
      };
    default:
      return state;
  }
};
