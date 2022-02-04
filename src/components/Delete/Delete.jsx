import React from 'react';
import axios from "axios";

function Delete() {

    const removeItem = (item) => {
    console.log('click');
    dispatch({ type: "DELETE_ITEM", payload: item.id});
}


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <button onClick={removeItem}>DELETE</button>
    </div>
  );
}

export default Delete;
