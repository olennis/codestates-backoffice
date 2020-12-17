// @flow 
import React, { useEffect } from 'react';
import { Student } from '../molecules/Student'
import { MoveCohort } from '../molecules/MoveCohort'
import { StateBar } from '../molecules/StateBar';
import styled from "styled-components"
import { Launch } from '../molecules/Launch'



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
    setCheckNum: Function
    setGitCheck: any
    setSlackCheck: Function
    setCalendar: any
    cohort: any
    nth: any
    action: any
    setAction: any
    setView: any
    currentPage: any
    setCurrentPage: any
    setSplitData: any
    setPageNum: any
};





//! 여기에추가
export const StudentList = (props: Props) => {
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
                        <Table>
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
                        </Table>
                        :
                        <Table>
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
                                props.splitData.map((data: any, idx: any) => { // * props.splitData = [[{}],[{}],[{}],[{}],[{}]]
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
                        </Table>
                    :
                    props.tab === '2' ?
                        props.view === '1' ?
                            <Table>
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
                            </Table>
                            :
                            <Table>
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
                            </Table>
                        : <div>과제현황 페이지 입니다</div>
            }
            <Launch
                cohort={props.cohort}
                nth={props.nth}
                gitCheck={props.gitCheck}
                slackCheck={props.slackCheck}
                calendar={props.calendar}
                action={props.action}
                setAction={props.setAction}
                data={props.data}
                setData={props.setData}
                view={props.view}
                setView={props.setView}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                splitData={props.splitData}
                setSplitData={props.setSplitData}
                pageNum={props.pageNum}
                setPageNum={props.setPageNum}
                checkNum={props.checkNum}
            ></Launch>
        </DataSection>
    );
};


const DataSection = styled.div`
    grid-column: 2 / 3;
    
`
const Table = styled.table`
    border-collapse:collapse;
    width:100%
`