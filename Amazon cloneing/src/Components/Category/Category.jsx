/* eslint-disable no-unused-vars */
import React from "react";
import { categoryInfos } from "./categoryFulllnfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos?.map((infos, index) => (
        <CategoryCard data={infos} key={index} />
      ))}
    </section>
  );
}

export default Category;
