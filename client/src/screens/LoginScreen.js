import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUserReducer = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginUserReducer;
  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div
          className="col-md-4 card p-2 text-center"
          style={{ marginTop: "150px" }}
        >
          <div>
            <h2 className="text-center m-3">Log In</h2>
            {error && <Error errorMessage="Invalid Credentials" />}
            {loading && <Loader />}
            <form onSubmit={login}>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
              />
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />

              <div className="text-end">
                <button type="submit" className="btn btn-dark mt-3">
                  Log In
                </button>
              </div>
            </form>
            <a className="text-center m-3" href="/register">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
