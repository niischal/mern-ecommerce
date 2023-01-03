import axios from "axios";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};

export const getProductById = (productId) => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_BY_ID_REQUEST" });
  axios
    .post("/api/products/getproductbyid", { productId })
    .then((res) => {
      dispatch({ type: "GET_PRODUCT_BY_ID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_PRODUCT_BY_ID_FAILED", payload: err });
    });
};

export const filterProducts = (searchKey, sort, category) => (dispatch) => {
  let filteredProducts;
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      filteredProducts = res.data;
      console.log(
        "filteredProducts",
        filteredProducts,
        searchKey,
        sort,
        category
      );
      if (searchKey) {
        filteredProducts = res.data.filter((product) => {
          return product.name.toLowerCase().includes(searchKey);
        });
      }
      if (sort != "popular") {
        if (sort == "highToLow") {
          filteredProducts = res.data.sort((a, b) => {
            return -a.price + b.price;
          });
        } else if (sort == "lowToHigh") {
          filteredProducts = res.data.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }
      if (category != "all") {
        filteredProducts = res.data.filter((product) => {
          return product.category.toLowerCase().includes(category);
        });
      }
      console.log("filteredProducts", filteredProducts);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });
    })
    .catch((err) => {
      dispatch({ type: "GET_PRODUCTS_FAILED" });
    });
};
