import React from 'react'
import FilterOptionItem from './FilterOptionItem';

function Filter() {
  return (
    <div className='filter'>
      <div className="filter-section">
        <div className="filter-header">
          <p>Color</p>
        </div>
        <div className="filter-options">
          <input type="checkbox" name="color1" id="color1"/>
        </div>
      </div>
    </div>
  )
}

export default Filter
