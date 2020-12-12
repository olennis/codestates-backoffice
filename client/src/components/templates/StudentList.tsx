// @flow 
import React, { useEffect, useState } from 'react';
import { Student } from '../molecules/Student'
import { MoveCohort } from '../molecules/MoveCohort'
import { StateBar } from '../molecules/StateBar';
import styled from "styled-components"

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
    checkNum: any
    setCheckNum: any
    setGitCheck: any;
    setSlackCheck: any;
    setCalendar: any
};

//! 여기에추가
export const StudentList = (props: Props) => {
    // console.log(props.data, '!!!!!!!')
    useEffect(() => {
        // let checkData = props.data
        props.setData(
            props.data.map((student: any) => {
                return {
                    'checkValue': false,
                    name: student.name,
                    email: student.email,
                    githubUserName: student.githubUserName,
                    log: student.log,
                    id: student.id,
                    googleId: student.googleId
                }
            }))

    }, [])

    return (
        <DataSection>
            {
                props.tab === '1' ?
                    props.view === '1' ?
                        <table>
                            <StateBar
                                view={props.view}
                                pageNum={props.pageNum}
                                splitData={props.splitData}
                                setGitCheck={props.setGitCheck}
                                gitCheck={props.gitCheck}
                                setSlackCheck={props.setSlackCheck}
                                slackCheck={props.slackCheck}
                                calendar={props.calendar}
                                setCalendar={props.setCalendar}
                                tab={props.tab}
                                data={props.data}
                                setData={props.setData}
                                checkNum={props.checkNum}
                                setCheckNum={props.setCheckNum}
                            />
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
                                            checkNum={props.checkNum}
                                            setCheckNum={props.setCheckNum}
                                        />
                                    })
                            }
                        </table>
                        :
                        <table>
                            <StateBar
                                view={props.view}
                                pageNum={props.pageNum}
                                splitData={props.splitData}
                                setGitCheck={props.setGitCheck}
                                gitCheck={props.gitCheck}
                                setSlackCheck={props.setSlackCheck}
                                slackCheck={props.slackCheck}
                                calendar={props.calendar}
                                setCalendar={props.setCalendar}
                                tab={props.tab}
                                data={props.data}
                                setData={props.setData}
                                checkNum={props.checkNum}
                                setCheckNum={props.setCheckNum}
                            />
                            {
                                // console.log(props.splitData.map((data: any) => { return data[0] }))
                                props.splitData.map((data: any, idx: any) => { // * props.splitData = [[{}],[{}],[{}],[{}],[{}]]
                                    console.log(data[Number(props.pageNum) - 1])
                                    return data[Number(props.pageNum) - 1].sort(function (a: any, b: any) {
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
                                            checkNum={props.checkNum}
                                            setCheckNum={props.setCheckNum}

                                        />
                                    })
                                })

                            }
                        </table>
                    :
                    props.tab === '2' ?
                        props.view === '1' ?
                            <table>
                                <StateBar
                                    view={props.view}
                                    pageNum={props.pageNum}
                                    splitData={props.splitData}
                                    setGitCheck={props.setGitCheck}
                                    gitCheck={props.gitCheck}
                                    setSlackCheck={props.setSlackCheck}
                                    slackCheck={props.slackCheck}
                                    calendar={props.calendar}
                                    setCalendar={props.setCalendar}
                                    tab={props.tab}
                                    data={props.data}
                                    setData={props.setData}
                                    checkNum={props.checkNum}
                                    setCheckNum={props.setCheckNum}
                                />
                                {
                                    props.data
                                        .sort(function (a: any, b: any) {
                                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                                        })
                                        .map((student: any, index: number) => {
                                            return <MoveCohort
                                                key={index}
                                                index={index}
                                                student={student}
                                                data={props.data}
                                                setData={props.setData}
                                                gitCheck={props.gitCheck}
                                                slackCheck={props.slackCheck}
                                                calendar={props.calendar}
                                                checkNum={props.checkNum}
                                                setCheckNum={props.setCheckNum}
                                            />
                                        })
                                }
                            </table>
                            :
                            <table>
                                <StateBar
                                    view={props.view}
                                    pageNum={props.pageNum}
                                    splitData={props.splitData}
                                    setGitCheck={props.setGitCheck}
                                    gitCheck={props.gitCheck}
                                    setSlackCheck={props.setSlackCheck}
                                    slackCheck={props.slackCheck}
                                    calendar={props.calendar}
                                    setCalendar={props.setCalendar}
                                    tab={props.tab}
                                    data={props.data}
                                    setData={props.setData}
                                    checkNum={props.checkNum}
                                    setCheckNum={props.setCheckNum}
                                />
                                {
                                    props.splitData.map((data: any, idx: any) => {
                                        return data[Number(props.pageNum) - 1].sort(function (a: any, b: any) {
                                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                                        }).map((student: any, index: number) => {
                                            return <MoveCohort
                                                key={index}
                                                index={index}
                                                student={student}
                                                data={props.data}
                                                setData={props.setData}
                                                gitCheck={props.gitCheck}
                                                slackCheck={props.slackCheck}
                                                calendar={props.calendar}
                                                checkNum={props.checkNum}
                                                setCheckNum={props.setCheckNum}

                                            />
                                        })
                                    })
                                }
                            </table>
                        : <div>과제현황 페이지 입니다</div>
            }
        </DataSection>
    );
};


const DataSection = styled.div`
    border: 1px solid red;
    grid-column: 2 / 3;
`