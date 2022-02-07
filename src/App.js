import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "components/UI/Notification";
import { uiActions } from "store/ui-slice";

function App() {
  //
  const cartBaseUrl =
    "https://react-udemy21-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json";
  //
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // useEffect()
  useEffect(() => {
    // sendCartData ()
    const sendCartData = async () => {
      //
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending data!",
        })
      );

      // fetch
      const response = await fetch(cartBaseUrl, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending data cart failed!");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data Successfully!",
        })
      );
    };

    // execute() & catch()
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data Failed!",
        })
      );
    });

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
