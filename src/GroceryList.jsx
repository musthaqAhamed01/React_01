import React from 'react';


function GroceryList({groceries,handleDelete,handleCheck})
    { 
      return(
        <>
          {groceries.length>0?
       ( <ul >
        {groceries.map((indItem) => (
          <li className='listItem'  key={indItem.id}>
            <input
              
              type='checkbox'
              checked={indItem.isChecked}
              onChange={()=>handleCheck(indItem.id)}
            />
            
            <label id="itemName">{indItem.isChecked ?<s id="checked">{indItem.item}</s> :indItem.item}</label>
            <button id='deleteButton' onClick={()=>handleDelete(indItem.id)}>Delete</button>
            
          </li>
  
        ))}
      </ul>):
           (<p className="centerInfo">No Search Item is Present</p>) }
        </>
        
         
      )

}

export default GroceryList;
