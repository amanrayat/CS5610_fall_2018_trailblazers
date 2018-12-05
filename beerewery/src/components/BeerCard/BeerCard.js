import React from 'react'

function BeerCard({record}){
    return(
        <div className="bg-white row border">
            <div className="col-12 my-4">
                {
                    record.labels &&
                    <img src={record.labels.icon}/>
                }
                {
                    !record.labels &&
                    <i className="fa fa-2x fa-beer" aria-hidden="true"></i>
                }
                {record.name}
            </div>
        </div>
    )
}

export default BeerCard