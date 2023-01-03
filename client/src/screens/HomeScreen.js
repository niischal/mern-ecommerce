import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

function HomeScreen() {
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getAllProductsState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter />
      <div className="pagination justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error errorMessage="Something Went Wrong..." />
        ) : (
          <div className="row justify-content-center">
            {products.map((product) => {
              return (
                <div className="card col-md-3 m-2 p-2" key={product._id}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
