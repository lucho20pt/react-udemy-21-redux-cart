import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "components/UI/Notification";
import { fetchCartData, sendCartData } from "store/cart-actions";

// first time loading check
let isAppStarted = false;

function App() {
  //
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());

    return () => console.log("callback");
  }, [dispatch]);

  // useEffect() sendCartData
  useEffect(() => {
    if (!isAppStarted) {
      isAppStarted = true;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

    return () => console.log("callback");
  }, [cart, dispatch]);

  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
