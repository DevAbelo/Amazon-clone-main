import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut"; 
import { DataContext } from "../../components/Data Provider/DataProvider";
import ProductCard from "../../components/Product/ProductCard"; 
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat"; 
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Functional component for the shopping cart page
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // console.log(renderAdd);

  // Calculate the total price of items in the basket
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
// Increment the amount of a product in the cart
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
// Decrement the amount of a product in the cart
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <section className={classes.cart__container}>
        <div className={classes.cart__card}>
          <h2>Hello</h2>
          <h3>Your Shopping basket</h3>
          <hr />
          {/* Check if the basket is empty */}
          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart.</p>
          ) : (
            // Map through the basket items and render a ProductCard for each
            basket?.map((item, i) => {
              return (
                <section key={i} className={classes.cart__product}>
                  <ProductCard
                    key={item.id}
                    renderAdd={false} // Disable the "Add to cart" button in ProductCard
                    product={item} // Pass the product data
                    add_description={true} // Show the full description
                    flex={true} // Use flexbox layout for the product card
                  />
                  {/* Button to increment the quantity of the product */}
                  <div className={classes.cart__btn__container}>
                    <button
                      className={classes.cart__btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    {/* Button to decrement the quantity of the product */}
                    <button
                      className={classes.cart__btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
          {/* If the basket is not empty, display the subtotal and checkout option */}
        {basket?.length !== 0 && (
          <div className={classes.cart__subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              {/* Option to mark the order as a gift */}
              <small>This order contain a gift</small>
            </span>
             {/* Link to the checkout page */}
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;