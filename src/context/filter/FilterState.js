import { useState } from "react";
import FilterContext from "./FilterContext";

const FilterState = (props) => {

    const [colorFilter, setColorFilter] = useState([]);
    const [genderFilter, setGendFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);
    const [typeFilter, setTypeFilter] = useState([]);

    return (
        <FilterContext.Provider value={{colorFilter, setColorFilter, genderFilter, setGendFilter, priceFilter, setPriceFilter, typeFilter, setTypeFilter}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterState;