// @flow 

import React, { useEffect, useState } from 'react';
import {Student} from '../molecules/Student'
import {MoveCohort} from '../molecules/MoveCohort'
interface Props {
    data:Array<[]>,
    setStudentData:Function,
    studentData:Array<[]>,
    tab:string,
    gitCheck:any,
    setData:Function,
    slackCheck: any,
    calendar: any
};
export const StudentList = (props: Props) => {
    useEffect(() => {
        // let checkData = props.data
        console.log(props.data,'dofjeifdl')
        props.setData(
            props.data.map((student:any)=>{
            return {'checkValue' : false, name:student.name , email:student.email, githubUserName:student.githubUserName, log:student.log, id:student.id, googleId : student.googleId}
        }))
    
    },[])
    
    

    
    
    return (
        <>
            {
            props.tab === '1'? 
                <div>
                    수강생 정보 페이지 입니다
                    
                    {
                        props.data
                            .sort(function(a:any, b:any) { 
	                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                            })
                            .map((student:any, index:number) => {
                                return <Student key={index} index={index} student={student} data={props.data} setData={props.setData}></Student>  
                            })
                    }
                </div> : 
            props.tab === '2'?
                <div>
                    기수이동 페이지 입니다
                    {
                        props.data
                            .sort(function(a:any, b:any) { 
	                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                            })
                            .map((student:any, index:number)=>{
                                return <MoveCohort key={index} index={index} student={student} data={props.data} setData={props.setData} gitCheck={props.gitCheck} slackCheck={props.slackCheck} calendar={props.calendar}></MoveCohort>
                            })
                    }    
                </div>:
                <div>과제 현황 페이지 입니다</div>


            }
           
        </>

    );
};



