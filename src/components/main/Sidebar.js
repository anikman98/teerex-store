import React from 'react'
import FilterOption from '../filter/FilterOption'
import '../../css/Sidebar.css'

function Sidebar() {
  return (
    <div className='filter-main'>
      <h2 className='filter-text'>Filters</h2>
      <hr />
      <FilterOption />
    </div>
  )
}

export default Sidebar