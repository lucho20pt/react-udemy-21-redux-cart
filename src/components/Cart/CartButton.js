import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "store/ui-slice";
import classes from "./CartButton.module.scss";

const CartButton = (props) => {
  //
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  const cartQuantity = useSelector(state => state.cart.totalCartQuantity);
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
