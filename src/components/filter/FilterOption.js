import { useContext } from "react"
import FilterContext from "../../context/filter/FilterContext"


function Filter() {

  const filter = useContext(FilterContext);

  const handleColorChange = (e) => {
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

  return (
    <div className='filter'>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Color</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input type="checkbox" name="color1" value={"Red"} id="color1" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color1">&nbsp;Red</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color2" value={"Blue"} id="color2" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color2">&nbsp;Blue</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color3" value={"Green"} id="color3" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color3">&nbsp;Green</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color4" value={"Black"} id="color4" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color4">&nbsp;Black</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color5" value={"Pink"} id="color5" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color5">&nbsp;Pink</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color6" value={"Grey"} id="color6" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color6">&nbsp;Grey</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color7" value={"Purple"} id="color7" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color7">&nbsp;Purple</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color8" value={"White"} id="color8" onChange={(e) => handleColorChange(e)}/>
            <label htmlFor="color8">&nbsp;White</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" name="color9" value={"Yellow"} id="color9" onChange={(e) => handleColorChange(e)}/>
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
