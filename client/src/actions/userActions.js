import axios from "axios";

export const registerNewUser = (user) => (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQ" });
  axios
    .post("/api/users/register", user)
    .then((res) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "USER_REGISTER_FAILURE", paylod: err });
    });
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQ" });
  axios
    .post("/api/users/login", user)
    .then((res) => {
      dispatch({ type: "USER_LOGIN_SUCCESS" });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      window.location.href = "/";
    })
    .catch((err) => {
      dispatch({ type: "USER_LOGIN_FAILURE", paylod: err });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");

  dispatch({ type: "USER_LOGOUT" });

  window.location.href = "/login";
};
