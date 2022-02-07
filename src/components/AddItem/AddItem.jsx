
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddItem () {

    const dispatch = useDispatch();
    const [fileData, setFileData] = useState();

    const fileChangeHandler = (evt) => {
        setFileData(evt.target.files[0])
    }

    const onSubmitHandler = (evt) => {
        evt.preventDefault();

        const data = new FormData();

        data.append('image', fileData)

        dispatch({
            type:'UPLOAD',
            payload: data
        })
    }

    return (
        <div>
            <h2>Image Upload</h2>
            <form  onSubmit={onSubmitHandler} >
                <br></br>
                <input type="file" onChange={fileChangeHandler}/>
                <button type="submit">Submit</button>
            </form> 
        </div>
    );
}

export default AddItem;