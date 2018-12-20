export const jsonToDate = (jsonDate) => {
    let dateTime = jsonDate.split('T')
    let date = dateTime[0].split("-")
    let time = dateTime[1].split(':')
    let year = date[0]
    let month = parseInt(date[1]) - 1
    let day = date[2]
    let hour = time[0]
    let minute = time[1]
    return new Date(year, month, day, hour, minute)
}

export const getWeekday = (dayIndex) => {
    let weekday = new Array(7);
    weekday[0] =  "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"
    return weekday[dayIndex]
}

export const getMonth = (monthIndex) => {
    let month = new Array(12)
    month[0] = 'January';
    month[1] = 'Febuary';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    return month[monthIndex]
}


export const parseTimeFromJson = (jsonDateTime) => {
    let dateTime = jsonToDate(jsonDateTime)
    let hours = dateTime.getHours()
    let minute = dateTime.getMinutes()
    let meridian
    if ( hours >= 12 ) {
        hours -= 12
        meridian = 'PM'
    } else {
        meridian = 'AM'
    }

    if (minute < 10) {
        minute = `0${minute}`
    }

    return `${hours}:${minute} ${meridian}`
}