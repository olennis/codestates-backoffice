// @flow 
import React, { useState } from 'react';
type Props = {
    student : any,
    index : any,
    data : any,
    setData : any
};
export const StudentCheck = (props: Props) => {
    const chooseOne = (e:any) => {
        let checked = e.target.checked
        props.setData(props.data.map((data:any)=>{
            if(props.student.id === data.id){
                data.checkValue = checked
            }
            return data
        }))

}
    

    return (
        <div>
            <input type='checkbox' checked={props.student.checkValue || ''}  onChange={(e: any) => { chooseOne(e) }} ></input>
        </div>
    );
}