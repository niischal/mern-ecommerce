import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

export default function RegisterationScreen() {
  const registerNewUserReducer = useSelector(
    (state) => state.registerNewUserReducer
  );
  const { loading, error, success } = registerNewUserReducer;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(registerNewUser(user));
    } else {
      alert("Password Mismatch");
    }
  };
  return (
    <div>
      <div className="row justify-content-center">
        <div
          className="col-md-5 card p-2 text-center"
          style={{ marginTop: "150px" }}
        >
          <div>
            <h2 className="text-center m-3">Register</h2>
            {loading && <Loader />}
            {error && <Error errorMessage="Email already used" />}
            {success && <Success successMessage="Registered Successfully" />}
            <form onSubmit={register}>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
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
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />

              <div className="text-end">
                <button type="submit" className="btn btn-dark mt-3">
                  Register
                </button>
              </div>
            </form>
            <a className="text-center m-3" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
