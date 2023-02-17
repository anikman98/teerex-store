import { useState } from "react";
import FilterContext from "./FilterContext";

const FilterState = (props) => {

    const [colorFilter, setColorFilter] = useState([]);
    const [genderFilter, setGenderFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);
    const [typeFilter, setTypeFilter] = useState([]);
    const [filterDisplay, setFilterDisplay] = useState(true);

    const resetFilter = () => {
        setColorFilter([]);
        setGenderFilter([]);
        setPriceFilter([]);
        setTypeFilter([]);
    }

    return (
        <FilterContext.Provider value={{colorFilter, setColorFilter, genderFilter, setGenderFilter, priceFilter, setPriceFilter, typeFilter, setTypeFilter, resetFilter, filterDisplay, setFilterDisplay}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterState;