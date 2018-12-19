import React from 'react'
import {Link} from 'react-router-dom'
const MovmentButtons = ({back, forward}) => {

    
    return (
        <div className='movementButtons'>
            <Link className='back-button m-button' to={back}>
                BACK
            </Link>
            <button className='forward-button m-button' onClick={forward}>
                CONTINUE
            </button>
            <Link to='/appointments/new' className='start-over-button m-button'>
                START OVER
            </Link>
        </div>
    )
}

export default MovmentButtons