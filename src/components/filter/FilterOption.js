import React from 'react'
import FilterOptionItem from './FilterOptionItem';

function Filter() {
  return (
    <div className='filter'>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Color</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Red</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Blue</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Green</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Black</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Pink</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Grey</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Purple</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;White</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Yellow</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Gender</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Male</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Gender</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Price</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Rs.0-250</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Rs.250-450</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Rs.450 & above</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Type</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Polo</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Hoodie</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1"/>
            <label htmlFor="color1">&nbsp;Basic</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
