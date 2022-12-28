import { useEffect, useState, useContext } from 'react';
import Searchbar from '../navbar/Searchbar';
import ProductCard from './ProductCard';
import ProductContext from '../../context/product/ProductContext';
import '../../css/Catalogue.css';
import FilterContext from '../../context/filter/FilterContext';
import SearchContext from '../../context/search/SearchContext';

function Catalogue() {
  // const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  let items = [];

  const products = useContext(ProductContext);
  const filter = useContext(FilterContext);
  const search = useContext(SearchContext);

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
    items = products.product;
    if(filter.colorFilter.length > 0){
      items = items.filter((item) => {
        return filter.colorFilter.includes(item.color) ? item : false
      })
    }
    if(filter.genderFilter.length > 0){
      items = items.filter((item) => {
        return filter.genderFilter.includes(item.gender) ? item : false
      })
    }
    if(filter.typeFilter.length > 0){
      items = items.filter(item => {
        return filter.typeFilter.includes(item.type) ? item : false
      })
    } 
    if(filter.priceFilter.length > 0){
      items = items.filter(item => {
        return filter.priceFilter[0] < item.price && filter.priceFilter[filter.priceFilter.length-1] >= item.price ? (item) => {console.log(item);return item} : false
      })
    }
    products.setResult([...items]);
  }

  // const searchItems = () => {

  // }   

  useEffect(() => {
    
    checkFilter();
    // searchItems();
    
  },[filter, search]);

  useEffect(() => {
    if(products.product.length === 0 || loading)
      fetchData();
  },[])

  return (
    <div className="catalogue-main">
      
      <div className="catalogue-cards">
        {
          loading 
          ? <h3>Loading...</h3>
          : products.result.length > 0
            ? products.result.map((item, key) => {
              return (
                <ProductCard key={key} item={item}/>
              )
              })
            : filter.colorFilter.length > 0 || filter.typeFilter.length > 0 || filter.priceFilter.length > 0 || filter.genderFilter.length > 0
              ?
                <h3>No results for selected filter options...</h3>
              :
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
