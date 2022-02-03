import ProductItem from "./ProductItem";
import classes from "./Products.module.scss";

const DUMMY_PRODUCTS = [
  {
    id: 10,
    title: "First Title",
    price: 5,
    description: "This is a first product description",
  },
  {
    id: 11,
    title: "Second Title",
    price: 8,
    description: "This is a second product description",
  },
];

const Products = (props) => {
  //
  const products = DUMMY_PRODUCTS;

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => {
          const { id, title, price, description } = product;
          return (
            <ProductItem
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
