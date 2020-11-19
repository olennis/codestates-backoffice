// @flow 
import * as React from 'react';
import {Student} from '../molecules/Student'
type Props = {
    data:Array<[]>,
    setStudentData:any,
    studentData:any
};
export const StudentList = (props: Props) => {

    const chooseStudent = (e:any , index:number) => {
        if(e.target.checked ){
            console.log('체크 상태:', e.target.checked)
            props.studentData.push(props.data[index])
            console.log('전달 데이터:',props.studentData)  
            }
        else if(!e.target.checked){
            for(let i = 0 ; i < props.studentData.length; i += 1){
                if(JSON.stringify(props.studentData[i]) === JSON.stringify(props.data[index])){
                    console.log('체크 상태:', e.target.checked)
                    props.studentData.splice(i,1)
                    console.log('전달 데이터:',props.studentData)  
                }
            }
        }
        
        return props.studentData  
    }

    return (
        <div>
            {props.data.map((student:any, index:number)=>{
                return (
                    <div key={index}>
                        <input type='checkbox' onClick={(e:any) => {chooseStudent(e,index)}}></input>
                        <Student student={student}></Student>
            
                    </div>
                )
            })}
        </div>
    );
};