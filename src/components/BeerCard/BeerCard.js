import React from 'react'
import { Link} from 'react-router-dom'

function BeerCard({record}){
    return(
        <div className="bg-white row border py-4">
            <div className="col-2">
                {
                    record.labels &&
                    <img src={record.labels.icon}/>
                }
                {
                    !record.labels &&
                    <i className="fa fa-2x fa-beer pt-2" aria-hidden="true"/>
                }
            </div>
            {
                record.labels &&
                <div className="col-6 pt-1">
                    <div className="row">
                        <Link to={`/beer/${record.id}`}>{record.name}</Link>
                    </div>
                    <div className="row">
                        {record.style.name}
                    </div>
                </div>
            }
            {
                !record.labels &&
                <div className="col-6">
                    <div className="row">
                        <Link to={`/beer/${record.id}`}>{record.name}</Link>
                    </div>
                    <div className="row">
                        {record.style.name}
                    </div>
                </div>
            }
            <div className="col-2">

            </div>
            <div className="col-2">
                {record.abv}% ABV
            </div>
        </div>
    )
}

export default BeerCard