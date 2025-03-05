import React from "react";


function SearchItem({ searchItem, setSearchItem,handleSearch})
{
  return (
    <form class="container" onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        placeHolder="Search Item"
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      ></input>
    </form>
  );
}

export default SearchItem;
