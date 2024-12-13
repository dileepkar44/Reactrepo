import React from "react";
import styles from './Item.module.css'

const Item = ({ foodItems, bought, handleBuyBtnClick }) => {
  // let {foodItems} = props; //destructuring

 
  return (
    <>
      <li
        className={`${styles['kg-item']} list-group-item  ${bought && 'active'}`}
      >
        <span className={`${styles["kg-span"]}`}>{foodItems}</span>
        <button className={`${styles.button} btn btn-info`}
        onClick={handleBuyBtnClick}>Buy</button>
      </li>{" "}
      {/*App.jsx?t=1731558175423:33 Warning: Each child in a list should have a unique "key" prop.*/}
    </>
  );
};

export default Item;
