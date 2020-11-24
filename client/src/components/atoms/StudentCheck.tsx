// @flow 
import React, { useState } from 'react';
type Props = {
    student : any,
    index : any
};
export const StudentCheck = (props: Props) => {
    const [chooseCheck,setChooseCheck] = useState(false)
    const chooseOne = (e:any) => {
        props.student.checkValue = !props.student.checkValue
        console.log(props.student.checkValue,'chooseOne')
        setChooseCheck(props.student.checkValue)
    }
    return (
        <div>
            {console.log(props.student.checkValue,'123123213')}
            <input type='checkbox' checked={props.student.checkValue}  onChange={(e: any) => { chooseOne(e) }} ></input>
        </div>
    );
};