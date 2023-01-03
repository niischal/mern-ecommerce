import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const addToCartReducer = useSelector((state) => state.cartReducer);
  const { cartItem } = addToCartReducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Mern Stack Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {currentUser ? (
              <div className="dropdown  me-2">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => dispatch(logoutUser())}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/login"
                  aria-current="page"
                >
                  Log In
                </a>
              </li>
            )}

            <li className="nav-item">
              <Link to="/cart" className="nav-link" aria-disabled="true">
                <BsFillCartFill /> {cartItem.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
