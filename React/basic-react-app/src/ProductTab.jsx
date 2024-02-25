import Product from "./Product"

function ProductTab(){
    let options = ["hitech", "durable", "fast"];
    let options2 = { a: "hitech", b: "durable", c: "fast" };
    return (
        <>
        <Product title="phone" price="30k" features={options} features2={options2}/>
        <Product title="laptop" price={40000} />
        <Product title="smart watch" price={1000} />
        <Product title="pen" />
        </>
    );
}

export default ProductTab;