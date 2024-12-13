import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
 const {counterValue} = useSelector(store => store.counter)

  return (
    <div>
      <p className="lead mb-4">
       counter current value: {counterValue}
      </p>
    </div>
  );
};

export default DisplayCounter;
