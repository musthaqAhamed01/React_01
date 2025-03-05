import React from "react";

function AddItem({ item, setItem, handleSubmit, handleClear }) {
  return (
    <form className="container">
      <input
         //autoFocus
        id="addItem"
        placeHolder="Type Item"
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></input>
      <button
        className="itemButton"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Add Item
      </button>
      <button className="itemButton" onClick={(e) => handleClear(e)}>
        Clear All
      </button>
    </form>
  );
}

export default AddItem;
