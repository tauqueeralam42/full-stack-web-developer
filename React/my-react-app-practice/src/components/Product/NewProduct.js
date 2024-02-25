import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props){
    function newData(data){
        console.log("inside newProduct");
        console.log(data);
        props.fun(data);
    }
    return(
        <div className='newproduct'>
            <ProductForm fun={newData}/>
        </div>
    );
}

export default NewProduct;