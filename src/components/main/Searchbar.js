import React, { useContext, useEffect } from 'react'
import SearchContext from '../../context/search/SearchContext'
import '../../css/Searchbar.css'
import SearchIcon from '../../images/search.png'
import FilterContext from '../../context/filter/FilterContext'
import FilterOption from '../../components/filter/FilterOption'

function Searchbar() {

  const search = useContext(SearchContext);
  const filter = useContext(FilterContext);

  const handleSearch = (e) => {
    search.setSearchKeyword(e.target.value);
  }

  const handleClickOnFilter = () => {
    filter.setFilterDisplay(!filter.filterDisplay);
  }

  useEffect(()=>{
    if(window.innerWidth < 786){
        filter.setFilterDisplay(false);
    }
  },[window.innerWidth]);

  return (
    <>
    <div className='search-bar'>
      <div className="search-icon">
      <img src={SearchIcon} alt="Search"/>
      </div>
      <input type="search" className='search-input' name='search' placeholder='Search for products...' onChange={(e) => handleSearch(e)} />
      <button onClick={handleClickOnFilter} className="filter-button">
        <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
          <g>
            <g>
              <path d="M8.959,0v81.89l201.666,201.666V512l90.75-60.5V283.556L503.041,81.89V0H8.959z M271.125,435.31l-30.25,20.167V292.416h30.25V435.31z M279.985,262.166h-47.969L60.6,90.75h390.802L279.985,262.166z M472.791,60.5H39.209V30.25h433.582V60.5z"/>
            </g>
          </g>
        </svg>
      </button>
    </div>
    {
      filter.filterDisplay && window.innerWidth < 786 ? <FilterOption /> : null
    }
    </>
  )
}

export default Searchbar