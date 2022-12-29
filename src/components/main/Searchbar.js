import React, { useContext } from 'react'
import SearchContext from '../../context/search/SearchContext'
import '../../css/Searchbar.css'
import SearchIcon from '../../images/search.png'

function Searchbar() {

  const search = useContext(SearchContext);

  const handleSearch = (e) => {
    search.setSearchKeyword(e.target.value);
  }

  return (
    <div className='search-bar'>
      <div className="search-icon">
      <img src={SearchIcon} alt="Search"/>
      </div>
      <input type="search" className='search-input' name='search' placeholder='Search for products...' onChange={(e) => handleSearch(e)} />
    </div>
  )
}

export default Searchbar