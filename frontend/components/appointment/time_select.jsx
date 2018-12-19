import { Component } from 'react'

import MovementButtons from './movement_buttons'


class TimeSelect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div>

                </div>
                <MovementButtons back='/appointments/date' forward={submitForm} />
            </div>
        )
    }

}

export default TimeSelect