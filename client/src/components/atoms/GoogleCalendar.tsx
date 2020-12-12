// @flow 
import * as React from 'react';

type Props = {
    calendar: any
    setCalendar: any
    data: any
    setData: any
};
export const GoogleCalendar = (props: Props) => {
    const calmoji = (event: any) => {
        props.setCalendar(event.target.checked)
        props.setData(props.data.map((student: any) => {
            if (student.checkValue && event.target.checked) {
                student.calendarcheck = true
            }
            else {
                student.calendarcheck = false
            }
            return student
        }))

    }
    return (
        <th>
            <input type="checkbox" onClick={(event: any) => calmoji(event)} /> 구글캘린더
        </th>
    );
};