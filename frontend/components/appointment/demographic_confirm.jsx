import React from 'react'
import { Link } from 'react-router-dom'

const DemographicConfirm = ({confirmDemographics}) => {
    return (
        <div>
            <button onClick={confirmDemographics}>Conform Demographics</button>
        </div>
    )
}

export default DemographicConfirm