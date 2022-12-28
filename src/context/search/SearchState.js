import { useState } from "react";
import SearchContext from "./SearchContext";

const SearchState = (props) => {

    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <SearchContext.Provider value={{searchKeyword, setSearchKeyword}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;