import Product from "./Product.jsx";

function ProductTab(){
    let arr = ["hi-tech","hello","Y1"];
    let obj = { a: "Hello", b : "Welcom", c : "H2"};
    return (
        <div>
        {/* React Props
        Props are the information that you pass to a JSX tag */}
            <Product title="Phone" price = {30000} />
            <Product title="Laptop" price = {50000}/>
            <Product title="Pen" price = {30} />
        </div>
    );
}
export default ProductTab;