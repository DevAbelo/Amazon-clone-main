import React, { useContext, useEffect, useState } from "react";

import classes from "./order.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { DataContext } from "../../Components/Data Provider/DataProvider";
import { db } from "../../Utility/firebase";
import ProductCard from "../../Components/Product/ProductCard";


// Functional component to display user orders
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  // Fetch orders from Firebase whenever the user changes
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
           // Map through the snapshot and update the orders state with the fetched data
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    } else {
      setOrders([]);  // If there's no user, clear the orders
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px", fontSize: "16px" }}>
              {" "}
              You don't have orders yet.
            </div>
          )}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders; // Exporting the component for use in other parts of the application