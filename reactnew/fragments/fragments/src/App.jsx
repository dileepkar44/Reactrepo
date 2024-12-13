import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //"Dal", "Green Veggies", "Chapathi", "Mudde", "Bassaru",'Gee'
  // let foodItems = [
  //   "Dal",
  //   "Green Veggies",
  //   "Chapathi",
  //   "Mudde",
  //   "Bassaru",
  //   "Gee",
  // ];
  // const [textToShow, setTextToShow] = useState();
  const [foodItems, setFoodItems] = useState([])
  //  let textToShow = ""
  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }
  // let emptyMessage =  foodItems.length === 0 ? <h3>I am still hungry</h3> : null
  //console.log(event.target.value);
  // console.log(event);
  // setTextToShow(event.target.value);
  const onKeyDown = (event) => {
    if(event.key === 'Enter')
    {
      let newFoodItem = event.target.value
    event.target.value = ''
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      // console.log(newFoodItem)
    }
  
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
      <p>Above are the list of healthy food items</p>
    </Container> */}
    </>
  );
}

export default App;
