// @flow 
import { setUncaughtExceptionCaptureCallback } from 'process';
import * as React from 'react';
type Props = {
    data:Array<[]>,
    
};
export const StudentList = (props: Props) => {
    console.log('props.data:',props.data)
    
    return (
        <div>
            {props.data.map((student:any, index:number)=>{
                return (
                    <div key={index}>
                        <input type='checkbox' onClick={(e:any) => console.log('체크박스 이벤트 : ',e.target.checked)}></input>
                        <span>{student.id}</span>
                        <span>{student.name}</span>
                        <span>{student.email}</span>
                        <span>{student.githubUserName}</span>
                        <div>------------------------------</div>
            
                    </div>
                )
            })}
        </div>
    );
};