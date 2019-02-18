![alt text](https://github.com/trevor-shepard/my_health/blob/master/app/assets/images/MyHealth_Logo-01.png "Logo Title Text 1")


###Web application for  patients to manage healthcare appointments and to interact with thier providers

[MyHealth](https://aa-myhealth.herokuapp.com/#/)

## Table of contents

* [Technologies](#Full-Stack-Application)
* [Authentication](#User-Authentication)
* [Appointment Display](#Appointment-Display)
* [Authentication](#User-Authentication)


### Full Stack Application
* Ruby on Rails Backend with Postgres Database
  * Api with jbuilder
* React/Redux Frontend
  * No external libraries used for date handeling
  * No external libraries used for styling

### User Authentication
* Fully functional signin/ signup features
* Demo Login for demonstration of webside (providers and health information not available for new users)

### Appointment Display
* Users can see upcoming appointments displayed in both list and calender format
* Appointments sorted by month and by date
* Fully customizable frontend calander written in Java Scrypt
* Able to scroll between months accuratly
```javascript
// Generate days in a month
generateDays(date) {
    // account for year rollover
    this.lastMonth = date.getMonth() === 0 ? 11 : date.getMonth() - 1
    this.lastMonthYear =  date.getMonth() === 0 ? (date.getFullYear - 1) : date.getFullYear()
    this.nextMonth = date.getMonth() === 11 ? 0 : date.getMonth() + 1
    this.nextMonthYear = date.getMonth() === 11 ? (date.getFullYear + 1) : date.getFullYear()

    this.days = []
    // Get previous month lapover days
    for (let index = 0; index < this.startofMonth.getDay(); index++) {
        let current = false
        this.days.unshift(new Day(this.lastMonthYear, this.lastMonth, this.daysInMonths[this.lastMonth] - index, current))
    }
    // Get current months days
    for (let index = 1; index < (this.daysInMonths[date.getMonth()] + 1); index++) {
        this.days.push(new Day(date.getFullYear(), date.getMonth(), index, true))
    }
    // Get next month lapover days
    
    for (let index = 0; index < 6 - (this.endofMonth.getDay()); index++) {
        this.days.push(new Day(this.nextMonthYear, this.nextMonth, index + 1, false))
    }
}

```

### Appointment Scheduling
* Users choose which provider they would like to schedule an appointment with
* Users choose which dates they would like to schedule appointments on
* Users choose which available time slots on selected days they would
* Users able to cancel appointments
* Custom validations to see if both user and provider is available for requested timeslot
```javascript
def available_timeslot_provider
    self.provider.appointments.each do |appointment|
        if (self.start > appointment.start && self.start < appointment.end)
            errors.add(:start, "appointment time is unavailable, #{self.provider.fname} #{self.provider.lname} has a conflicting appointment")
        end
        if (self.end > appointment.start && self.end < appointment.end)
            errors.add(:end, "appointment time is unavailable, #{self.provider.fname} #{self.provider.lname} has a conflicting appointment")
        end
    end
end

def available_timeslot_user
    self.user.appointments.each do |appointment|
        if (self.start > appointment.start && self.start < appointment.end)
            errors.add(:start, 'another already scheduled appointment conflicts with the start of this appointment')
        end
        if (self.end > appointment.start && self.end < appointment.end)
            errors.add(:end, 'another already scheduled appointment conflicts with the end of this appointment')
        end
    end
end
```


### Prescription Refill Request
* Users able to request refills of previously prescribed medications
* Users able to check status of refill requests
