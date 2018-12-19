import React from 'react'
import MovmentButtons from './movement_buttons'


class DateSelect extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            start: null,
            end: null,
            error: null
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(field) {
        return (e) => this.setState({[field]: e.target.value})
    }   

    render() {
        let today = new Date()
        let three_months_date = new Date()
        let three_months_away = ((today.getMonth() + 3) % 12)
        
        if (three_months_away === 0) {
            three_months_away = 12
        }
        three_months_date.setMonth(three_months_away)

        let submitForm

        if (this.state.start && this.state.end) {
            submitForm = this.props.setDate(this.state.start, this.state.end)
        } else {
            submitForm = () => {
                this.setState({error: <div>
                    Dates are invalid, please select again.
                </div>})
                
            }
        }
        
        
        
        
        
        return(
            <div>
                <div>
                    <h1 className='two-rem'>Schedule an Appointment</h1>
                    <div>
                        <div>Preferred Dates:</div>
                        { this.state.error}
                        <div>
                            <input type="date" onChange={this.handleInput('start')}/>
                             To: 
                             <input type="date" placeholder='' onChange={this.handleInput('end')}/>
                            <div>You can Schedule appointments from {today.getMonth()}/{today.getDate()}/{today.getFullYear()} until {three_months_date.getMonth()}/{three_months_date.getDate()}/{three_months_date.getFullYear()}</div>
                        </div>
                    </div>

                </div>
                <MovmentButtons back={'/appointments/provider'} forward={submitForm} />
            </div>
        )
    }
}

export default DateSelect;