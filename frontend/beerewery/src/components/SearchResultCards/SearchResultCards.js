import React from 'react'
import BeerCard from "../BeerCard/BeerCard";

function SearchResultCards({results}){
    return(
        results.map((lesson, index) => (
                <BeerCard
                    record = {lesson}
                />
            )
        )
    );
}

export default SearchResultCards