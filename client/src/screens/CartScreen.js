import React from "react";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";

export default function CartScreen() {
  const cartReducerState = useSelector((state) => state.cartReducer);
  const { cartItem } = cartReducerState;
  let subtotal = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row mt-5 justify-content-center">
        <div className="card col-md-8">
          <h1 className="text-center m-3">My Cart</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addToCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <BsFillTrashFill
                        onClick={() => dispatch(deleteFromCart(item))}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h2 className="text-center m-3">Sub-Total: Rs. {subtotal}</h2>
          <hr />
          <button className="btn btn-dark">PAY NOW</button>
        </div>
      </div>
    </div>
  );
}
