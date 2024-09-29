/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useContext } from 'react';
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../Data Provider/DataProvider';
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  console.log(totalItem);

  return (
    <section className={classes.header__outerContainer}>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo section */}
          <Link to='/'>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
          </Link>
          {/* delivery */}
          <div className={classes.delivery}>
            <span><SlLocationPin /></span>
            <div className={classes.delivery__container}>
              <p>Deliver to</p>
              <span>Ethiopia</span>
              <div className={classes.dropdown}>
                <p>We're showing you items that ship to <strong>Ethiopia</strong>. To see items that ship to a different country, change your delivery address.</p>
                <button>Dismiss</button>
                <button className={classes.changeAddress}>Change Address</button>
              </div>
            </div>
          </div>
        </div>

        {/* search */}
        <div className={classes.search}>
          <select name='' id=''>
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder='Search Amazon' />
          <BsSearch size={25} />
        </div>

        {/* right side links */}
        <div className={classes.order__container}>
          <Link to="" className={classes.language}>
            <img src="data:image/png;base64,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" alt="USA Flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          {/* Sign In / Sign Out */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello, {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          <Link to='/orders'>
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
