// import { useContext } from 'react';
// import CartContext from '../store/cart-context';
import { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);

//   const cartCtx = useContext(CartContext);
//   const numberOfCartItem = cartCtx.item.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>YourOrder</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
