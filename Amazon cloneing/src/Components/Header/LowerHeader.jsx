/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <MdOutlineMenu />
          <p>All</p>
        </li>
        <li>Todays Deals</li>
        <li>Costumer Services</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
        <li>Shop the Gaming Store</li>
      </ul>
      
    </div>
  );
}

export default LowerHeader;