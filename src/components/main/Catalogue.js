import { useEffect, useState, useContext } from 'react';
import Searchbar from './Searchbar';
import ProductCard from './ProductCard';
import '../../css/Catalogue.css';
import ProductContext from '../../context/product/ProductContext';
import FilterContext from '../../context/filter/FilterContext';
import SearchContext from '../../context/search/SearchContext';

function Catalogue() {
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


  const checkFilter = (items) => {
    console.log("filter")
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

  const searchItems = () => {
    console.log("search")
    items = products.product.filter((item) => {
              return item.color.toLowerCase().includes(search.searchKeyword.toLowerCase()) || item.name.toLowerCase().includes(search.searchKeyword.toLowerCase()) || item.type.toLowerCase().includes(search.searchKeyword.toLowerCase()) ? item : false
            });
    filter.resetFilter();
    console.log(items);
    products.setResult([...items]);
    console.log(products.result);
  }   
   
  useEffect(() => {
    if(products.product.length === 0 || loading)
      fetchData();
    if(search.searchKeyword.length > 0){
      searchItems();
    }
    if(filter.colorFilter.length > 0 || filter.genderFilter.length > 0 || filter.typeFilter.length > 0 || filter.priceFilter.length > 0){
      if(items.length > 0)
        checkFilter(items);
      else
        checkFilter(products.product);
    }
    // eslint-disable-next-line 
  },[filter, search.searchKeyword]);

  return (
    <div className="catalogue-main">
      <Searchbar/>
      <div className="catalogue-cards">
        {
          loading 
          ? <h3>Loading...</h3>
          : products.result
            ? products.result.map((item, key) => {
                return (
                  <ProductCard key={key} item={item}/>
                )
              })
            : (filter.colorFilter.length > 0 || filter.typeFilter.length > 0 || filter.priceFilter.length > 0 || filter.genderFilter.length > 0 || search.searchKeyword.length > 0)
              ? <h3>No results for selected search or filter options...</h3>
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
