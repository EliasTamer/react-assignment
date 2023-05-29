import "./CartItems.scss";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import BoxTarget from "../BoxTarget/BoxTarget";

const CartItems = () => {
  const {
    visibleCart,
    handleDrop,
    cartItems,
    totalPrice,
    clearCart,
    addQuantityItem,
    removeQuantityItem,
  } = useContext(CartContext);
  return (
    <BoxTarget handleDrop={handleDrop}>
      <div className={`cart-items ${visibleCart ? "active" : ""}`}>
        <div className="content">
          <h4> My Cart</h4>

          {cartItems.length > 0 ? (
            <>
              {cartItems.map(({ id, description, title, price, quantity }) => {
                return (
                  <div className="cart-item" key={id}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <div>Price: ${price}</div>
                    <div>Quantity: {quantity}</div>

                    <div className="quantity-controls">
                      <button
                        onClick={() => {
                          addQuantityItem(id);
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          removeQuantityItem(id);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="total">Total: ${totalPrice}</div>
              <button className="clear-cart" onClick={clearCart}>
                Clear cart
              </button>
            </>
          ) : (
            "Drop some items into your cart!"
          )}
        </div>
      </div>
    </BoxTarget>
  );
};

export default CartItems;
