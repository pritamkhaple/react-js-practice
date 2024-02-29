import Items from "./Items";

const FoodItems = ({items}) => {
  return (
    <ul className={`list-group ${style.list}`}>
      {items.map((item) => {
        <Items key={item} foodItems={item}></Items>
      })}
    </ul>
  );
};

export default FoodItems;
