import React from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Delete({itemId}) {
  const dispatch = useDispatch();
    const removeItem = (item) => {
      console.log('item is ',itemId);
    dispatch({ type: "DELETE_ITEM", payload: itemId});
}


  return (
    <div className="container">
      <button onClick={removeItem}>DELETE</button>
    </div>
  );
}

export default Delete;
