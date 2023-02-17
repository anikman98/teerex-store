import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {

    const [product, setProduct] = useState([]);
    const [result, setResult] = useState();

    return (
        <ProductContext.Provider value={{product, setProduct, result, setResult}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;