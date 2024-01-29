import "./Product.css"

function Product({title,price,features}) {
    let a = features ? features.map((f) => <li>{f}</li>) : "";
   
    return (
        <div className="Product">
            <h3> {title} </h3>
            <h5> Price : {price}</h5>
            <p>{a}</p>
        </div>
    );
}

export default Product;