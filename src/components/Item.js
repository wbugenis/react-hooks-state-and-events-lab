import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, cartSetter] = useState(false)

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=> {cartSetter(!inCart)}}>Add to Cart</button>
    </li>
  );
}

export default Item;
