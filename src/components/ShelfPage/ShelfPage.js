import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelfReducer)
  console.log(shelf, '***********is shelf');
  useEffect(() => {
    dispatch({
      type: 'GET_SHELF'
    })
  }, []);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {shelf.map(item => (
          <li>{item.description} <img src={item.image_url} /></li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
