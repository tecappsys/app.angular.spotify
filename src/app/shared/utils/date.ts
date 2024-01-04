import * as moment from "moment-timezone";

export class DateUtils{


    public static now(){
        return moment().format('YYYY-MM-DDTHH:mm:ss')
    }

    public static getDiff(fromDate:string, toDate?:string):number{
        const currentDate = toDate ? moment(toDate) : moment();
        const timeLapse = currentDate.diff(fromDate,'seconds');
        return timeLapse
    }
}