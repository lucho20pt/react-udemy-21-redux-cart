import { uiActions } from "./ui-slice";

const cartBaseUrl =
  "https://react-udemy21-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

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
        body: JSON.stringify(cart),
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
