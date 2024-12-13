import React, { useState } from "react";
import Item from "./Item";

export default function FoodItems({ items }) {
  const [activeItems, setActiveItems] =useState([])
  const onButtonChange = (item,event) => {
   let newItems = [...activeItems, item]
   setActiveItems(newItems)
  }
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItems={item}
            bought={activeItems.includes(item)}
            handleBuyBtnClick={(event)=>onButtonChange(item, event) }
          />
        ))}
      </ul>
    </div>
  );
}
