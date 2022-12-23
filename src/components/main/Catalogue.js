import { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from './Searchbar';
import ProductCard from './ProductCard';
import ProductContext from '../../context/product/ProductContext';
import '../css/Catalogue.css';

function Catalogue() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  // console.log(searchParams.get('search'));

  const products = useContext(ProductContext);

  const fetchData = async () => {
    try{
      const response = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      const data = await response.json();
      if(data){
        products.setProduct(data);
        setLoading(false);
      }
    }catch(error){
      setLoading(false);
        console.log(error);
    }
  }

   

  useEffect(() => {
    if(products.product)
      fetchData();
    
  },[]);


  return (
    <div className="catalogue-main">
      <Searchbar/>
      <div className="catalogue-cards">
        {
          loading ? "Loading" :
          products.product.map((item, key) => {
            return (
              <ProductCard key={key} item={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Catalogue
