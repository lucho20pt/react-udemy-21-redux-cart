import { useSelector } from "react-redux";
import Card from "../UI/Card";

import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalCartPrice);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          const { id, name, price, quantity, totalItemPrice } = item;
          return (
            <CartItem
              key={id}
              item={{
                id: id,
                title: name,
                quantity: quantity,
                total: totalItemPrice,
                price: price,
              }}
            />
          );
        })}
      </ul>
      <div>
        <strong>total:</strong> ${total.toFixed(2)}
      </div>
    </Card>
  );
};

export default Cart;
