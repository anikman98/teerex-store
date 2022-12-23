import { useEffect } from "react";
import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {

    const [product, setProduct] = useState([]);
    const [Result, setResult] = useState();

    return (
        <ProductContext.Provider value={{product, setProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;