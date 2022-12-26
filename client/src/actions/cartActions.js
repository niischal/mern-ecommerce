export const addToCart = (product, quantiy) => (dispatch, getState) => {
  const cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countInStock: product.countInStock,
    quantity: quantiy,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItem)
  );
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItem)
  );
};
