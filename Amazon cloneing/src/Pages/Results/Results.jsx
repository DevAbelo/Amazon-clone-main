import React, { useEffect, useState } from "react";

import classes from "./result.module.css";
import LayOut from "../../Components/Layout/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../API/endpoints";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  },
  []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName} </p>
        <hr />
      </section>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} renderAdd={true} />
          ))}
        </div>
      )}
    </LayOut>
  );
}

export default Results;
