import React from 'react'
import BeerCard from "../BeerCard/BeerCard";

function SearchResultBeerCards({results}){
    return(
        results.map((lesson, index) => (

                <BeerCard
                    record = {lesson}
                />
            )
        )
    );
}

export default SearchResultBeerCards