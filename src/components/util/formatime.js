export const convertToTime= (time)=> {
    const dayofweek= [ "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const convertTimestamp= new Date(time)
    const nowTime= new Date()
    const get_date= convertTimestamp.getDate()
    const get_month= convertTimestamp.getMonth()
    const get_year= convertTimestamp.getFullYear()
    const get_hour= convertTimestamp.getHours()
    const get_minute= convertTimestamp.getMinutes()
    const getNowdate= nowTime.getDate()
    const getNowmonth= nowTime.getMonth()
    const getNowyear= nowTime.getFullYear()
    var start = new Date(nowTime.getFullYear(), 0, 0)
    var diff = nowTime - start
    var diff2= convertTimestamp- start
    var oneDay = 1000 * 60 * 60 * 24
    var day1 = Math.floor(diff / oneDay)
    var day2= Math.floor(diff2/oneDay)
    let formattime= ""
    if(get_date=== getNowdate && get_month=== getNowmonth && get_year=== getNowyear) {
        formattime+= "Today "
    }
    else if( day1- day2 < 7 ) {
        formattime+= dayofweek[convertTimestamp.getDay()]+ " "
    }
    else {
        if(get_date< 10) {
            formattime+= `0${get_date.toString()}/`
        }
        else {
            formattime+= get_date.toString()+"/"
        }
        if(get_month+1 <9) {
            formattime+= `0${parseInt(get_month+1).toString()}/`
        }
        else {
            formattime+= get_month.toString()+ "/"
        }
        formattime+= get_year.toString() + " "
    }
    if(get_hour<10) {
        formattime+= `0${get_hour.toString()}:`
    }
    else if(get_hour> 12 && get_hour<22) {
        formattime+= `0${parseInt(get_hour-12).toString()}:`
    }
    else if(get_hour>=22) {
        formattime+= `${parseInt(get_hour-12).toString()}:`
    }
    else {
        formattime+= get_hour.toString()+ ":"
    }
    if(get_minute<10) {
        formattime+= `0${get_minute.toString()} `

    }
    else {
        formattime+= get_minute.toString()+ " "
    }
    if(get_hour<=12) {
        formattime+= 'am'
    }
    else {
        formattime+= 'pm'
    }

    return formattime

}

export const convertMilisecondstoSecond= (miliseconds)=> {
    if(Math.floor(parseInt(miliseconds) / 1000 / 60) >= 30) {
        return true
    }
    else {
        return false
    }
}

export const MinusTime= ( timeStartOffline)=> {
    const date= new Date()
    if((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600))>=1 && (Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600))<=23) {
        return ((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600))+ "h ago")
    }
    else if((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600))<1) {
        if((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/60))===0) {
            return "1m ago"
        }
        return ((Math.floor(((parseInt(date.getTime()))- (parseInt(timeStartOffline)))/ 1000/ 60))+ "m ago")
    }
    else if((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/24))>=1 || (Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/24))<=7 ) {
        return (Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/24)) + "d"
    }
    else if((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/24/7))>=1 && (Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/7))<=52) {
        return (Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/24/7)) + "w"
    }
    else if((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/24/7/52))>=1 && (Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/7/52))<=100) {
        return (Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600/24/7/52)) + "y"
    }
    else if((Math.floor((parseInt(date.getTime()) - parseInt(timeStartOffline)) /1000/3600))>=24) {
        return true
    }
}