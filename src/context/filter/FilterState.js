import { useState } from "react";
import FilterContext from "./FilterContext";

const FilterState = (props) => {

    const [ColorFilter, setColorFilter] = useState([]);
    const [GenderFilter, setGendFilter] = useState([]);
    const [PriceFilter, setPriceFilter] = useState([]);
    const [TypeFilter, setTypeFilter] = useState([]);

    return (
        <FilterContext.Provider value={{ColorFilter, setColorFilter, GenderFilter, setGendFilter, PriceFilter, setPriceFilter, TypeFilter, setTypeFilter}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterState;