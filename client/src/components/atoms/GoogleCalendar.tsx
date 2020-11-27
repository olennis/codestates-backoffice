// @flow 
import * as React from 'react';

type Props = {
    calendar: any
    setCalendar: any
    data: any
    setData:any
};
export const GoogleCalendar = (props: Props) => {
    const calmoji = (event:any) => {
        props.setCalendar(event.target.checked)
        props.setData(props.data.map((student:any)=>{
            if(student.checkValue && event.target.checked){
                student.calendarcheck = true
                console.log(student.calendarcheck)
            }
            else{
                student.calendarcheck = false
                console.log(student.calendarcheck)
            }
            return student
        }))
        
    }
    return (
        <div>
            <input type="checkbox" onClick={(event: any) => calmoji(event)} /> 구글캘린더
        </div>
    );
};