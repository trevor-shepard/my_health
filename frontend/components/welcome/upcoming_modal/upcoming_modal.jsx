import React from 'react'
import * as DateUtil from "../../../util/date"
import MonthDisplay from './month_show';

class UpcomingModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let thisMonthAppts = []
        let nextMonthAppts = []
        let futureAppts = []

        if (Object.values(this.props.providers).length && Object.values(this.props.appointments).length && Object.values(this.props.clinics).length) {

            // find dates for one and two months from now
            let now = new Date()
            let nextMonth
            let monthAfterNext
            if (now.getMonth() == 11) {
                nextMonth = new Date(now.getFullYear() + 1, 0, 1);
                monthAfterNext = new Date(now.getFullYear() + 2, 0, 1);
            } else if (now.getMonth == 10) {
                nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
                monthAfterNext = new Date(now.getFullYear() + 1, 0, 1);            
            } else {
                nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
                monthAfterNext = new Date(now.getFullYear(), now.getMonth() + 2, 1);
            }

            // split appointments into approperate time slot list
            Object.values(this.props.appointments).forEach(appt => {
                let apptDate = DateUtil.jsonToDate(appt.start)

                if (apptDate < now) return

                if (apptDate < nextMonth) {
                    thisMonthAppts.push(appt)
                } else if (apptDate < monthAfterNext) {
                    nextMonthAppts.push(appt)
                } else {
                    futureAppts.push(appt)
                }
            });

            let dateSort = (a, b) => {
                let aDate = DateUtil.jsonToDate(a.start)
                let bDate = DateUtil.jsonToDate(b.start)
                return aDate - bDate
            }

            thisMonthAppts.sort(dateSort)
            nextMonthAppts.sort(dateSort)
            futureAppts.sort(dateSort)
            
        }
        
        return(
            <div id="upcoming-modal" className="hidden">
                <div className="upcoming-modal-title">
                    Upcoming Appointments
                </div>
                <div className="upcoming-month-list">
                    {thisMonthAppts.length ? <MonthDisplay appts={thisMonthAppts} providers={this.props.providers} clinics={this.props.clinics} title={"This Month"} /> : null}
                    {nextMonthAppts.length ? <MonthDisplay appts={nextMonthAppts} providers={this.props.providers} clinics={this.props.clinics} title={"Next Month"} /> : null}
                    {futureAppts.length ? <MonthDisplay appts={futureAppts} providers={this.props.providers} clinics={this.props.clinics} title={"Future"} /> : null}
                </div>
            </div>
        )
    }
}

export default UpcomingModal;