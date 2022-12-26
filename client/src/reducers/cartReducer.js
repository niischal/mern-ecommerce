export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItem.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExists) {
        return {
          ...state,
          cartItem: state.cartItem.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      const cartAfterDelete = state.cartItem.filter((item) => {
        return item._id !== action.payload._id;
      });
      return {
        ...state,
        cartItem: cartAfterDelete,
      };
    default:
      return state;
  }
};
