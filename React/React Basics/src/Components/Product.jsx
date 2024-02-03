import "./Product.css"

function Product(props){
    return(
       <div className = "Product">
        <h3>{props.title}</h3>
        <p>{props.price}</p>
       </div>
    );
};

export default Product;