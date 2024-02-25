import "./ProductItem.css"
import ProductDate from './ProductDate';
import Card from "./Card";
import React, {useState} from "react";

function ProductItem(props){
    const [title, setTitle] = useState(props.title);

    function titleHandeler(){
        setTitle("Popcorne");
    }

   return (
    <Card className = "product-item">
        <ProductDate date={props.date}/>
        <div className = "product-item_description">
            <h2>{title}</h2>
        </div>
        <button onClick={titleHandeler}>Click me</button>
    </Card>

   );
}

export default ProductItem;