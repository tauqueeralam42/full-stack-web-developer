import "./Product.css";

function Product({title, price=100, features, features2}){
    return (
        <div className="Product">
            <h1> { title } </h1>
            <h4> Price: { price } </h4>
            <p>{features && features[0]}</p>
            {/* <p>{features && features.join(", ")}</p> */}
            {/* we can't directly render object but we can render individual key  */}
            <p>{features2 && features2.a}</p>
        </div>
    );
}

export default Product;