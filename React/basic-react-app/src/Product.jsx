import "./Product.css"

function Product({title,price,features}) {
    //let a = features ? features.map((f) => <li>{f}</li>) : "";
//    if(price > 30000){
//     return (
//         <div className="Product">
//             <h3> {title} </h3>
//             <h5> Price : {price}</h5>
//             <p> Discount of 5%</p>
//         </div>
//     );
//    }else{
//     return (
//         <div className="Product">
//             <h3> {title} </h3>
//             <h5> Price : {price}</h5>
//         </div>
//     );
//    }

let dis = price > 30000 ? "Discount of 5%" :"";
return (
            <div className="Product">
                <h3> {title} </h3>
                <h5> Price : {price}</h5>
                <p>{dis}</p>
            </div>
        );
   
}

export default Product;