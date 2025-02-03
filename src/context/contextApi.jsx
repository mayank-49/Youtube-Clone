import {createContext, useEffect, useState} from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) =>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoryData = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            // console.table(contents)
            setSearchResults(contents)
            setLoading(false)
        })
    }

    return (
    <Context.Provider value={{ //isse hum hmare sare useState ko globally provide kr denge hr component me use krne ke lie
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
    }}>
        {props.children}
    </Context.Provider>
    )
}
