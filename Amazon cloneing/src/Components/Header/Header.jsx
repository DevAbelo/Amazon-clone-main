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
            <img src="../../../public/image/android-chrome-512x512.png" alt="USA Flag" />
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
