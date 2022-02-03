import { useSelector } from "react-redux";
import Card from "../UI/Card";

import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          const { id, name, price, quantity, totalPrice } = item;
          return (
            <CartItem
              key={id}
              item={{
                id: id,
                title: name,
                quantity: quantity,
                total: totalPrice,
                price: price,
              }}
            />
          );
        })}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
