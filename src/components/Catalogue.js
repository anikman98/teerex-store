import {useEffect, useState} from 'react';
import Searchbar from './Searchbar';
import Card from './Card'


function Catalogue() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try{
      const response = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      const data = await response.json();
      if(data){
        setData(data);
        setLoading(false);
      }
    }catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);


  return (
    <div className="catalogue-main">
      <Searchbar/>
      <div className="catalogue-cards">
        {
          loading ? "Loading" :
          data.map((item, key) => {
            return (
              <Card item={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Catalogue
