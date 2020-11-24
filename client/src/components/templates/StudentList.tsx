// @flow 
import React, { useState } from 'react';
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
    const [isAllCheck, setAllCheck] = useState(false);
    /**
     * 1. 맨 처음 데이터를 받을 때부터 boolean 값 추가(checked 참조값) O
     * 2. all 체크박스를 클릭하면 > 상태값 변경(e.target.checked)
     * 3. 개별 데이터 체크박스는 2번의 상태값 참조
     */
    // 11.23 서버 닫힘
    // if props.data에 체크밸류값이 있다면 > 1번 성공
    const sendData = (e: any, index: number, data:any) => {
        if (e.target.checked) {
            console.log('체크 상태:', e.target.checked)
            props.studentData.push(props.data[index])
            console.log('전달 데이터:', props.studentData)
        }
        else if (!e.target.checked) {
            for (let i = 0; i < props.studentData.length; i += 1) {
                if (JSON.stringify(props.studentData[i]) === JSON.stringify(props.data[index])) {
                    console.log('체크 상태:', e.target.checked)
                    props.studentData.splice(i, 1)
                    console.log('전달 데이터:', props.studentData)
                }
            }
        }

        return props.studentData
    }
    const chooseAll = (e:any) => {
        props.data.forEach((student:any)=>student.checkValue = e.target.checked)
        setAllCheck(!isAllCheck)
    }
    
    return (
        <>
            {
                props.tab === '1'? 
                <div>
                    수강생 정보 페이지 입니다
                    <input type='checkbox' onChange={(e:any)=>{chooseAll(e)}} ></input>
                    {props.data.map((student:any, index:number) => {

                        if(isAllCheck){
                            return (
                            <Student key={index} index={index} student={student}></Student>
                            )
                            
                        }
                        else{
                            return <Student key={index} index={index} student={student}></Student>
                        }
                    })}
                </div> : 
                props.tab === '2'?
                <div>
                    기수이동 페이지 입니다
                    {props.data.map((student:any, index:number)=>{
                        return (
                            <div key={index}>
                            {/* <input type='checkbox' onChange={(e:any) => {chooseOne(e,index,student)}}></input> */}
                            <MoveCohort student={student} gitCheck={props.gitCheck}></MoveCohort>
                            </div>
                        )
                    })}    
                </div>:
                <div>과제 현황 페이지 입니다</div>
            }
        </>

    );
};



