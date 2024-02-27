import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Pizza (kidding ha)", "Milk",  "Dal-Bhaat", "Roti", "Whatever you like"]; // Add more items as needed

  return (
    <>
      {/* // Map Method */}
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item)=>(
        <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
    
  );
}

export default App;
