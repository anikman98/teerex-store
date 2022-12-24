import { useEffect, useState, useContext } from 'react';
import Searchbar from './Searchbar';
import ProductCard from './ProductCard';
import ProductContext from '../../context/product/ProductContext';
import '../../css/Catalogue.css';
import FilterContext from '../../context/filter/FilterContext';

function Catalogue() {
  // const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const products = useContext(ProductContext);
  const filter = useContext(FilterContext);

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

  const checkFilter = () => {
    products.setResult(() => {
      return products.product.filter((item) => {
        // return filter.colorFilter.includes(item.color) ? item : false 
        // return filter.genderFilter.includes(item.gender) ? item : false
        // return filter.typeFilter.includes(item.type) ? item : false
        // return () => {
        //   let items = [];
        //   for(let i=0; i<filter.priceFilter /2; i++){
        //     if(filter.priceFilter[i] <= item.price && filter.priceFilter[i+1] >= item.price)
        //       items.push(item);
        //   }
        //   return items;
        // }
      })
    })
  }
     

  useEffect(() => {
    if(products.product.length === 0)
      fetchData();

    checkFilter();
    
  },[filter]);


  return (
    <div className="catalogue-main">
      <Searchbar/>
      <div className="catalogue-cards">
        {
          loading 
          ? "Loading" 
          : products.result.length > 0
            ? products.result.map((item, key) => {
              return (
                <ProductCard key={key} item={item}/>
              )
              })
            : products.product.map((item, key) => {
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
