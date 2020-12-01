// @flow 
import * as React from 'react';
import { CheckAtoms } from "./CheckAtoms"

type Props = {
    slackCheck: any
    setSlackCheck: any
    data: any
    setData : any
};
export const Slack = (props: Props) => {

    const slmoji = (event:any) => {
        props.setSlackCheck(event.target.checked)
        props.setData(props.data.map((student:any)=>{
            if(student.checkValue && event.target.checked){
                student.slackcheck = true
                console.log(student.slackcheck,'☆')
            }
            else{
                student.gitcheck = false
                console.log(student.slackcheck,'★')
            }
            return student
        }))
        
    }
    return (
        <div>
            <input type="checkbox" onClick={(event: any) => slmoji(event)} /> 슬랙
        </div>
    );
};


