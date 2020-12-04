// @flow 

import React, { useEffect, useState } from 'react';
import { Student } from '../molecules/Student'
import { MoveCohort } from '../molecules/MoveCohort'
import { convertColorToString } from 'material-ui/utils/colorManipulator';
interface Props {
    data: Array<[]>,
    setStudentData: Function,
    studentData: Array<[]>,
    tab: string,
    setData: Function,
    gitCheck: any,
    slackCheck: any,
    calendar: any
    pageNum: any
    splitData: any
    view: any
};
export const StudentList = (props: Props) => {
    useEffect(() => {
        // let checkData = props.data
        props.setData(
            props.data.map((student: any) => {
                return { 'checkValue': false, name: student.name, email: student.email, githubUserName: student.githubUserName, log: student.log, id: student.id, googleId: student.googleId }
            }))

    }, [])

    return (
        <>
        {
                props.tab === '1' ?
                    props.view === '1'
                        ?
                        <div>
                            {
                                props.data
                                    .sort(function (a: any, b: any) {
                                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                                    })
                                    .map((student: any, index: number) => {
                                        return <Student
                                            key={index}
                                            index={index}
                                            student={student}
                                            data={props.data}
                                            setData={props.setData}
                                            gitCheck={props.gitCheck}
                                            slackCheck={props.slackCheck}
                                            calendar={props.calendar}
                                        />

                                    })
                            }
                        </div>
                        : props.view === '5'
                            ? <div>
                                {console.log(props.splitData)}
                                {
                                    // console.log(props.splitData.map((data: any) => { return data[0] }))
                                    props.splitData.map((data: any, idx: any) => { // * props.splitData = [[{}],[{}],[{}],[{}],[{}]]
                                        return data[idx].sort(function (a: any, b: any) {
                                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                                        }).map((student: any, index: number) => {
                                            return <Student
                                                key={index}
                                                index={index}
                                                student={student}
                                                data={props.data}
                                                setData={props.setData}
                                                gitCheck={props.gitCheck}
                                                slackCheck={props.slackCheck}
                                                calendar={props.calendar}
                                            />
                                        })
                                    })
                                }
                            </div>
                            : console.log('nothing')
                    :
                    props.tab === '2' ?
                        <div>
                            기수이동 페이지 입니다
                    {
                                props.data
                                    .sort(function (a: any, b: any) {
                                            gitCheck={props.gitCheck}
                                            slackCheck={props.slackCheck}
                                            calendar={props.calendar}
                                            ></MoveCohort>
                            })
                    }    
                </div>:
                <div>과제 현황 페이지 입니다</div>
            }

        </>

    );
};



