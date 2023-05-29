import { Link } from "react-router-dom";
import BoxTarget from "../BoxTarget/BoxTarget";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItems from "../CartItems/CartItems";
import "./Header.scss";

const Header = () => {
  const { visibleCart, setVisibleCart, totalQuantity, handleDrop } =
    useContext(CartContext);
  return (
    <header className="header">
      <div className="header-controls">
        <h1>
          <Link to="/"> ReactCart </Link>
        </h1>
        <div
          className="cart-button"
          onClick={() => {
            setVisibleCart(!visibleCart);
          }}
        >
          <BoxTarget handleDrop={handleDrop}>
            <img src="/assets/shopping-cart.png" alt="Cart icon" />
            <div className="quantity-holder"> {totalQuantity}</div>
          </BoxTarget>
        </div>
      </div>

      <CartItems />
    </header>
  );
};

export default Header;
