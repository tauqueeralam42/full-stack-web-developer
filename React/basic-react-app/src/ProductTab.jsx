import Product from "./Product.jsx";

function ProductTab(){
    let arr = ["hi-tech","hello","Y1"];
    // let obj = { a: "Hello", b : "Welcom", c : "H2"};
    return (
        <div>
            <Product title="Phone" price = "30,000" features = {arr}/>
            <Product title="Laptop" price = "50,000"/>
            <Product title="Pen" price = "30" />
        </div>
    );
}
export default ProductTab;