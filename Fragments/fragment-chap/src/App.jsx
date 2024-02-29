import "./App.css";
import style from "./App.module.css"
import FoodItems from "./components/FoodItems";
import InputDiv from "./components/InputDiv";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Pizza (kidding ha)", "Milk",  "Dal-Bhaat", "Roti", "Whatever you like"]; // Add more items as needed

  const handleButtn = (item) => {
    console.log(`${item} buttn clicked`)
  }

  return (
    <>
      {/* // Map Method */}
      <h1>Healthy Food</h1>
      <InputDiv></InputDiv>
      {/* <FoodItems></FoodItems> */}
      <ul className={`list-group ${style.list}`}>
        {foodItems.map((item)=>(
        <li key={item} className="list-group-item">{item}
          <button className={style.buttn} onClick={ () => handleButtn(item)}>
            Buy
          </button>
        </li>
        ))}
      </ul>
    </>
    
  );
}

export default App;
