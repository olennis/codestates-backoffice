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
    /**
     * 1. 맨 처음 데이터를 받을 때부터 boolean 값 추가(checked 참조값) O
     * 2. all 체크박스를 클릭하면 > 상태값 변경(e.target.checked)
     * 3. 개별 데이터 체크박스는 2번의 상태값 참조
     */
    // 11.23 서버 닫힘
    // if props.data에 체크밸류값이 있다면 > 1번 성공
    // const sendData = (e: any, index: number, data:any) => {
    //     if (e.target.checked) {
    //         console.log('체크 상태:', e.target.checked)
    //         props.studentData.push(props.data[index])
    //         console.log('전달 데이터:', props.studentData)
    //     }
    //     else if (!e.target.checked) {
    //         for (let i = 0; i < props.studentData.length; i += 1) {
    //             if (JSON.stringify(props.studentData[i]) === JSON.stringify(props.data[index])) {
    //                 console.log('체크 상태:', e.target.checked)
    //                 props.studentData.splice(i, 1)
    //                 console.log('전달 데이터:', props.studentData)
    //             }
    //         }
    //     }

    //     return props.studentData
    // }
    const chooseAll = (e:any) => {
        let checked = e.target.checked 
        props.setData(props.data.map((student:any)=>{
            student.checkValue = checked
            return student
        }))
        
    }

    const sendData = () => {
        
        console.log(props.data,'버튼 클릭!')
        const idArray = props.data.reduce((arr:any,student:any)=>{
            if(student.checkValue){
                arr.push(student.id)
            }
            return arr
        },[])
        console.log(idArray,'idArray')
    }
    
    return (
        <>
            {
                props.tab === '1'? 
                <div>
                    수강생 정보 페이지 입니다
                    <input type='checkbox' onChange={(e:any)=>{chooseAll(e)}} ></input>
                    {props.data.map((student:any, index:number) => {
                        return <Student key={index} index={index} student={student} data={props.data} setData={props.setData}></Student>
                        
                    })}
                </div> : 
                props.tab === '2'?
                <div>
                    기수이동 페이지 입니다
                    <input type='checkbox' onChange={(e:any)=>{chooseAll(e)}} ></input>
                    {props.data.map((student:any, index:number)=>{
                        return <MoveCohort key={index} index={index} student={student} data={props.data} setData={props.setData}></MoveCohort>
                    })}    
                </div>:
                <div>과제 현황 페이지 입니다</div>
            }
           <button onClick={()=>{sendData()}}>가자가자가자가자가자!</button>
        </>

    );
};



