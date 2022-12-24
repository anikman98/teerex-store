import { useContext } from "react"
import FilterContext from "../../context/filter/FilterContext"


function Filter() {

  const filter = useContext(FilterContext);

  const handleColorSelect = (e) => {
    // console.log("value "+e.target.value);
    if(e.target.checked === true){
      filter.setColorFilter([...filter.colorFilter , e.target.value ])
    }
    if(e.target.checked === false){
      filter.setColorFilter(() => {
         return filter.colorFilter.filter((item) => {
          return item != e.target.value ? item : false
        })
      })
      // console.log(colors);
    }
  }

  const handleGenderSelect = (e) => {
    if(e.target.checked === true){
      filter.setGenderFilter([...filter.genderFilter , e.target.value ])
    }
    if(e.target.checked === false){
      filter.setGenderFilter(() => {
         return filter.genderFilter.filter((item) => {
          return item != e.target.value ? item : false
        })
      })
    }
  }

  const handlePriceSelect = (e) => {
    if(e.target.checked === true){
      let values = e.target.value.split(",")
      filter.setPriceFilter([ ...filter.priceFilter , ...values].sort())
    }
    if(e.target.checked === false){
      let values = e.target.value.split(",")
      console.log(values)
      filter.setPriceFilter(() => {
         return filter.priceFilter.filter((item) => {
          return values.includes(item) ? false : item
        })
      })
    }
  }

  const handleTypeSelect = (e) => {
    if(e.target.checked === true){
      filter.setTypeFilter([...filter.typeFilter , e.target.value ])
    }
    if(e.target.checked === false){
      filter.setTypeFilter(() => {
         return filter.typeFilter.filter((item) => {
          return item != e.target.value ? item : false
        })
      })
    }
  }

  return (
    <div className='filter'>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Color</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="color1" value={"Red"} id="color1" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color1">&nbsp;Red</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color2" value={"Blue"} id="color2" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color2">&nbsp;Blue</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color3" value={"Green"} id="color3" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color3">&nbsp;Green</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color4" value={"Black"} id="color4" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color4">&nbsp;Black</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color5" value={"Pink"} id="color5" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color5">&nbsp;Pink</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color6" value={"Grey"} id="color6" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color6">&nbsp;Grey</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color7" value={"Purple"} id="color7" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color7">&nbsp;Purple</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color8" value={"White"} id="color8" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color8">&nbsp;White</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color9" value={"Yellow"} id="color9" onChange={(e) => handleColorSelect(e)}/>
            <label htmlFor="color9">&nbsp;Yellow</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Gender</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="male" id="male" value={"Men"} onChange={(e) => {handleGenderSelect(e)}} />
            <label htmlFor="male">&nbsp;Male</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="female" id="female" value={"Women"} onChange={(e) => {handleGenderSelect(e)}}/>
            <label htmlFor="female">&nbsp;Female</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Price</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1" value={"0,250"} onChange={(e) => {handlePriceSelect(e)}}/>
            <label htmlFor="color1">&nbsp;Rs.0-250</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1" value={"251,450"} onChange={(e) => {handlePriceSelect(e)}}/>
            <label htmlFor="color1">&nbsp;Rs.251-450</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color1" id="color1" value={"451,9999"} onChange={(e) => {handlePriceSelect(e)}}/>
            <label htmlFor="color1">&nbsp;Rs.451 & above</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Type</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="polo" id="polo" value={"Polo"} onChange={(e) => {handleTypeSelect(e)}} />
            <label htmlFor="polo">&nbsp;Polo</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="hoodie" id="hoodie" value={"Hoodie"} onChange={(e) => {handleTypeSelect(e)}}/>
            <label htmlFor="hoodie">&nbsp;Hoodie</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="basic" id="basic" value={"Basic"} onChange={(e) => {handleTypeSelect(e)}}/>
            <label htmlFor="basic">&nbsp;Basic</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
