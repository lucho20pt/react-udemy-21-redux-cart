import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const cartBaseUrl =
  "https://react-udemy21-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    // fetch Data
    const fetchData = async () => {
      const response = await fetch(cartBaseUrl);

      if (!response.ok) {
        throw new Error("Fetching cart data failed");
      }
      const data = await response.json();
      return data;
    };

    // try catch fetchData()
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalCartQuantity: cartData.totalCartQuantity,
          totalCartPrice: cartData.totalCartPrice,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data Failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // pending state...
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending data!",
      })
    );

    // sendRequest
    const sendRequest = async () => {
      const response = await fetch(cartBaseUrl, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalCartQuantity: cart.totalCartQuantity,
          totalCartPrice: cart.totalCartPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending data cart failed!");
      }
    };

    // try catch sendRequest()
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data Failed!",
        })
      );
    }
  };
};
