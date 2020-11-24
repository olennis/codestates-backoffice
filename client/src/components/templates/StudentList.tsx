// @flow 
import * as React from 'react';
import { Student } from '../molecules/Student'
import { MoveCohort } from '../molecules/MoveCohort'
interface Props {
    data: Array<[]>,
    setStudentData: Function,
    studentData: Array<[]>,
    tab: string,
    gitCheck: any,
    slackCheck: any,
    calendar: any
};
export const StudentList = (props: Props) => {

    const chooseStudent = (e: any, index: number) => {
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


    console.log('props.tabNo:', typeof props.tab)
    return (
        <>
            {
                props.tab === '1' ?
                    <div>
                        수강생 정보 페이지 입니다
                    {props.data.map((student: any, index: number) => {

                        return (
                            <div key={index}>
                                <input type='checkbox' onClick={(e: any) => { chooseStudent(e, index) }}></input>
                                <Student student={student}></Student>
                            </div>
                        )
                    })}
                    </div> :
                    props.tab === '2' ?
                        <div>
                            기수이동 페이지 입니다
                    {props.data.map((student: any, index: number) => {
                            return (
                                <div key={index}>
                                    <input type='checkbox' onClick={(e: any) => { chooseStudent(e, index) }}></input>
                                    <MoveCohort student={student} gitCheck={props.gitCheck} slackCheck={props.slackCheck} calendar={props.calendar} />
                                </div>
                            )
                        })}
                        </div> :
                        <div>과제 현황 페이지 입니다</div>
            }
        </>

    );
};



