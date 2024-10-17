import React from "react";
import styles from "./order-items-container.module.scss";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import { ORDER } from "../../constants/app.constant";

export default function OrderItemsContainer() {
  const location = useLocation();
  const orders = location.state;
  console.log("Orders", orders);

  return (
    <div className={styles["order-items-container"]}>
      <h1 className={styles['order-title']}>{ORDER.TITLE}</h1>
      <p className={styles['order-detail-txt']}>{ORDER.ORDER_DETAIL}</p>
      <div className={styles["order-items-section"]}>
        {orders?.map((order) => (
          <ProductCard key={order.id} productData={order} />
        ))}
      </div>
    </div>
  );
}
