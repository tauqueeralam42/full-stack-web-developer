import './ProductForm.css'
import React, {useState} from 'react';

function ProductForm(props){

    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');

    function titleChangeHandeler(event){
        setTitle(event.target.value);

    }
    function dateChangeHandeler(event){
        setDate(event.target.value);
    }
    function submitHandeler(event){
        event.preventDefault();

        const productData={
        id: 'p4',
        title: 'Oil',
        amount: 540,
        date: new Date(2024,2,11)
        }

        props.fun(productData);
        setTitle("");
        setDate("");
    }

    return(
        <form onSubmit={submitHandeler}>
            <div>
                <label>Title</label>
                <input type ='text'value={title} onChange={titleChangeHandeler}></input>
            </div>
            <div>
                <lable>Date</lable>
                <input type='date' value={date} onChange={dateChangeHandeler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div>
                <button type='submit'>Add Product</button>
            </div>
            
        </form>
    );
}

export default ProductForm;