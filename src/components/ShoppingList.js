import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterState, setFilter] = useState("All")

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filterItems = () => {
    if (filterState === "All") {
      return items
    } else {
      return items.filter(item => item.category === filterState)
    } 
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={filterState} onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
