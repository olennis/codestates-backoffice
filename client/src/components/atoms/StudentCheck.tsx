// @flow 
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
type Props = {
    student: any,
    index: any,
    data: any,
    setData: any
    checkNum: any
    setCheckNum: any
};
export const StudentCheck = (props: Props) => {
    const checkNumber = (e: any) => {
        if (e.target.checked === true) {
            props.setCheckNum(props.checkNum + 1)
        }
        else if (e.target.checked === false) {
            props.setCheckNum(props.checkNum - 1)

        }
    }
    const chooseOne = (e: any) => {
        checkNumber(e)
        let checked = e.target.checked
        props.setData(props.data.map((data: any) => {
            if (props.student.id === data.id) {
                data.checkValue = checked
            }
            return data
        }))

    }


    return (

        <Checkbox color='primary' checked={props.student.checkValue || false} onChange={(e: any) => { chooseOne(e) }} ></Checkbox>

    );
}