import Product from "./Product";

//props


function ProductTab(){
    let data = [
        {
            title : "Mouse",
            price : 200
            
        },
        {
            title : "Keybord",
            price : 1200
        },
        {
            title : "Moniter",
            price : 5000
        }
    ];

    return(
        <>
            <h1>Props in React</h1>
            <br/>

            {/* <Product title = "Mouse" price= {200}/>
            <Product title = "Keybord" price= {1200}/>
            <Product title = "Moniter" price= {5000}/> */}

            <Product title = {data[0].title} price= {data[0].price}/>
            <Product title = {data[1].title} price= {data[1].price}/>
            <Product title = {data[2].title} price= {data[2].price}/>

        </>
    );

}

export default ProductTab;