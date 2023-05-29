import React, { useState, useEffect } from "react";
import { fetchCartItems, fetchListingItems } from "../apis/shopping-apis";

const CartContext = React.createContext({
  totalPrice: 0,
  status: "success",
  totalQuantity: 0,
  visibleCart: false,
  addQuantityItem: (id) => {},
  removeQuantityItem: (id) => {},
  setVisibleCart: () => {},
  clearCart: () => {},
  handleDrop: () => {},
  shopItems: [],
  cartItems: [],
});

export const CartContextProvider = (props) => {
  const [visibleCart, setVisibleCart] = useState(false);
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [status, setStatus] = useState([]);

  // function to fetch the initial data of shopping items and shopping cart
  const fetchInitialData = async () => {
    const itemsResp = await fetchListingItems();
    setShopItems(itemsResp.data);
    setStatus(itemsResp.status);
  };

  //function to handle dropping items in the cart effects
  const handleDrop = (id) => {
    let updatedShopItems = shopItems;
    let updatedCartItems = cartItems;

    // check if the dragged item exists inside the cart
    const isAlreadyInCart = cartItems.some((item) => item.id === id);

    // Get the data of the dragged item
    let draggedItem = updatedShopItems.find((item) => item.id === id);

    //Check if the item is already in the cart and updated accordingly
    if (isAlreadyInCart) {
      updatedCartItems.find((item) => item.id === id).quantity += 1;
    } else {
      updatedCartItems.push({ ...draggedItem, quantity: 1 });
    }

    updatedShopItems.find((item) => item.id === id).quantity -= 1;

    setShopItems([...updatedShopItems]);
    setCartItems([...updatedCartItems]);
  };

  // function to calculate the total price of the items inside the cart
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // function to clear all cart items
  const clearCart = () => {
    setCartItems([]);
  };

  // function to reduce the quantity of an item
  const removeQuantityItem = (id) => {
    let updatedCartItems = cartItems;

    const cartItemIndex = updatedCartItems.findIndex((item) => item.id === id);

    if (updatedCartItems[cartItemIndex].quantity === 1) {
      console.log("jere");
      updatedCartItems = updatedCartItems.filter((item) => item.id !== id);
    } else {
      updatedCartItems[cartItemIndex].quantity -= 1;
    }

    setCartItems([...updatedCartItems]);
  };

  // function to add the quanatity of an item
  const addQuantityItem = (id) => {
    let updatedCartItems = cartItems;

    const cartItemIndex = updatedCartItems.findIndex((item) => item.id === id);
    updatedCartItems[cartItemIndex].quantity += 1;

    setCartItems([...updatedCartItems]);
  };

  // fetching the initial data of the cart and available items only once
  useEffect(() => {
    fetchInitialData();
  }, []);

  const contextValue = {
    status: status,
    totalQuantity: cartItems.length,
    totalPrice: calculateTotal(),
    clearCart: clearCart,
    addQuantityItem: addQuantityItem,
    removeQuantityItem: removeQuantityItem,
    visibleCart: visibleCart,
    setVisibleCart: setVisibleCart,
    shopItems: shopItems,
    cartItems: cartItems,
    handleDrop: handleDrop,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
