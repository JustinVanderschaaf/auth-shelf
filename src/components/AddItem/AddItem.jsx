import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function AddItem () {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const itemToAdd = {
        description: description,
        image_url: image,
        user_id: user.id
    }

    const onAddItem = (evt) => {
        evt.preventDefault();
        console.log('itemToAdd is:', itemToAdd);
    
        dispatch({ 
            type: 'ADD_ITEM',
            payload: itemToAdd
        });
    
    };

    return (
        <div>
            <h2>Add Item to Shelf</h2>
            <form onSubmit={onAddItem}>
                <label htmlFor='description'>Description</label>
                <br></br>
                <input
                    value={description}
                    onChange={evt => setDescription(evt.target.value)}
                />
                <br></br>
                <label htmlFor='image'>Image URL</label>
                <br></br>
                <input
                    value={image}
                    onChange={evt => setImage(evt.target.value)}
                />
                <br></br>
                <button>Add Item</button>
            </form> 
        </div>
    );
}

export default AddItem;