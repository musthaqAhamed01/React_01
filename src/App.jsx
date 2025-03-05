import React from "react";
import { useState,useEffect } from "react";
import "./App.css"
import GroceryList from "./GroceryList";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Title from "./Title";



function App() {
  const [groceries, setGroceries] = useState(JSON.parse(localStorage.getItem('ShoppingList')) || []);
  const [searchItem, setSearchItem] = useState("");
  const [item, setItem] = useState("");

  useEffect(()=>
    {
      localStorage.setItem('ShoppingList', JSON.stringify(groceries))
},[groceries])

 
  const handleSearch=(e)=>
    {
      e.preventDefault();
      console.log(e.target.value);
}
  const handleClear=(e)=>
    {
      e.preventDefault();
      const upDatedList=[];
      setGroceries(upDatedList);
     
}

 
    
  const handleCheck = (passId) => {
    
     const upDatedList= groceries.map((item) =>
        item.id === passId ? { ...item, isChecked: !item.isChecked } : item)
      setGroceries(upDatedList);
    
  };
  const handleDelete = (id) => {
    const upDatedList= groceries.filter((item) => item.id !== id);
    setGroceries(upDatedList)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item != "") {
      const newItem = {
        item: item,
        id: groceries.length + 1,
        isChecked: false,
      };

      const upDatedList = [...groceries,newItem ];
      setGroceries(upDatedList);
    
      setItem("");
      
    }
  };


  return (
    <>
    
       <Title/>
      <AddItem item={item} setItem={setItem} handleSubmit={handleSubmit} handleClear={handleClear} />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch} />

      {groceries.length > 0 ? (
        <GroceryList
          groceries={groceries.filter((item) =>
            item.item.toLowerCase().includes(searchItem.toLowerCase()),
          )}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <h4 className='centerInfo'>No Item Present</h4>
      )}
    </>
  );
}

export default App;
