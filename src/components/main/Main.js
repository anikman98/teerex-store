import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar';
import Catalogue from './Catalogue';
import '../../css/Main.css';
import FilterContext from '../../context/filter/FilterContext';

function Main() {

  const filter = useContext(FilterContext);

  useEffect(() => {

  },[filter.filterDisplay])

  return (
    <div className="main">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="catalogue">
            <Catalogue />
        </div>
    </div>
  )
}

export default Main