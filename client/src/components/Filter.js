import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";

function Filter() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState("all");
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-3 me-2">
          <input
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            placeholder="Search Product"
            className="form-control"
          />
        </div>
        <div className="col-md-2  mt-4 me-2">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="form-select"
          >
            <option value="popular">Popular</option>
            <option value="highToLow">High To Low</option>
            <option value="lowToHigh">Low To High</option>
          </select>
        </div>
        <div className="col-md-2 mt-4 me-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashaion">Fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-2  mt-4 me-2">
          <button
            className="btn btn-dark"
            onClick={() => dispatch(filterProducts(searchKey, sort, category))}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
