import React from 'react'
import { Link} from 'react-router-dom'

function BreweryCard({record}){
    return(
        <div className="bg-white row border py-4">
            <div className="col-2">
                {
                    record.images && record.images.icon &&
                    <img src={record.images.icon}/>
                }
                {
                    (!record.images || !record.images.icon) &&
                    <i className="fa fa-2x fa-beer pt-2" aria-hidden="true"/>
                }
            </div>
            <div className="col-6 pt-1">
                <div className="row">
                    <Link to={`/breweryDetail/${record.id}`}>{record.name}</Link>
                </div>
                {
                    record.locations && record.locations.length &&
                    <div className="row">
                        {record.locations[0].locality}, {record.locations[0].region}{record.locations[0].countryIsoCode}
                    </div>
                }
                {
                    record.website &&
                        <div className="row">
                            <a href={record.website}>{record.website}</a>
                        </div>
                }
            </div>
        </div>
    )
}

export default BreweryCard