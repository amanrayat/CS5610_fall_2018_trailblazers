import React from 'react'
import BreweryCard from "../BreweryCard/BreweryCard";

function SearchResultBreweryCard({results}){
    return(
        results.map((brewery, index) => (
            <BreweryCard
                record = {brewery}
            />)
        )
    )
}

export default SearchResultBreweryCard