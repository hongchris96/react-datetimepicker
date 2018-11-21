import moment from 'moment'

export const datePicked = (startDate, endDate, newDate, startMode) => {
    if(startMode){
        return newDateStartMode(newDate, endDate);
    }else{
        return newDateEndMode(newDate, startDate);
    }
}

const newDateStartMode = (newDate, endDate) => {
    if(newDate.isSameOrBefore(endDate, "minutes")){
        return returnDateObject(newDate, endDate);
    }else{
        let newEnd = moment(newDate);
        newEnd.add(1, "days");
        return returnDateObject(newDate, newEnd);
    }
}

const newDateEndMode = (newDate, startDate) => {
    if(newDate.isSameOrAfter(startDate, "minutes")){
        return returnDateObject(startDate, newDate);
    }else{
        let newStart = moment(newDate);
        newStart.subtract(1, "days");
        return returnDateObject(newStart, newDate);
    }
}

const returnDateObject = (startDate, endDate) => {
    let returnValues = {};
    returnValues.startDate = startDate;
    returnValues.endDate = endDate;
    return  returnValues;
}