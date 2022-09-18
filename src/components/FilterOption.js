import React from 'react'
import FilterOptionItem from './FilterOptionItem';

function FilterOption({header}) {
  return (
    <div className='filter-option'>
        <div className="filter-header">
            <p>{header}</p>
        </div>
        {/*
            options.map((item) => {
                return (<FilterOptionItem name={item.name} value={item.value}/>)
            })
          */}
    </div>
  )
}

export default FilterOption
