import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "store/ui-slice";
import classes from "./CartButton.module.scss";

const CartButton = (props) => {
  //
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
