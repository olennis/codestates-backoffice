// @flow 
import * as React from 'react';

type Props = {
    calendar: any
    setCalendar: any
};
export const GoogleCalendar = (props: Props) => {
    return (
        <div>
            <input type="checkbox" onClick={(event: any) => props.setCalendar(event.target.checked)} /> 구글캘린더
        </div>
    );
};