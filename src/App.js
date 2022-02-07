import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const cartBaseUrl =
    "https://react-udemy21-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(cartBaseUrl, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      const data = await response.data;
      console.log(data);
    };
    fetchCart();
    return () => console.log("callback");
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
