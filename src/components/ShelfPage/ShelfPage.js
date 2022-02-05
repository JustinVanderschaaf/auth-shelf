import React from "react";
import Delete from "../Delete/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelfReducer);
  const user = useSelector((store) => store.user);
  console.log(user, "***********is user");
  console.log('shelf is ', shelf);
  
  useEffect(() => {
    dispatch({
      type: "GET_SHELF",
    });
  }, []);
  return (
    <div className="container">
      <ul>
        {shelf.map((item) => (
          <li>
            {item.description} <img src={`uploads/${item.image_url}`}/> {user.id === item.user_id && <Delete itemId ={item.id}/>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
