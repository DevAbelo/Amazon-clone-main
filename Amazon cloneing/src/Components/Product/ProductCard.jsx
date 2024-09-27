import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import classes from "./product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { DataContext } from "../Data Provider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDesc, renderAdd, showFullDescription }) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  // Function to truncate description
  const truncateDescription = (desc, maxLength) => {
    if (!desc) {
      return ""; // Return an empty string if description is undefined or null
    }
    if (desc.length <= maxLength) {
      return desc;
    }
    return `${desc.substring(0, maxLength)}...`;
  };

  return (
    <div className={`${classes.card__container} ${flex ? classes.product__flexed : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && (
          <div>
            {showFullDescription ? description : truncateDescription(description, 100)}
          </div>
        )}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
