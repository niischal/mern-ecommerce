import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const registerNewUserReducer = useSelector();
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
        <div className="col-md-5 card p-2" style={{ marginTop: "150px" }}>
          <div>
            <h2 className="text-center m-3">Log In</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}
