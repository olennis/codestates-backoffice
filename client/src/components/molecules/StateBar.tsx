// @flow 
import * as React from 'react';
import styled from "styled-components"
import { CheckToolBar } from './CheckToolBar';

type Props = {
    tab: any
    data: any
    setData: any
    setCheckNum: any
    checkNum: any
    //! 여기에추가
    setGitCheck: any;
    gitCheck: any
    setSlackCheck: any;
    slackCheck: any
    calendar: any
    setCalendar: any
};

export const StateBar = (props: Props) => {

    const chooseAll = (e: any) => {
        let checked = e.target.checked
        if (e.target.checked === true) {
            props.setCheckNum(props.data.length)
        }
        else if (e.target.checked === false) {
            props.setCheckNum(0)
        }
        props.setData(props.data.map((student: any) => {
            student.checkValue = checked

            return student
        }))

    }

    return (
        <tr>
            {
                props.tab === '1' ?
                    <>
                        <th>
                            {
                                props.data.length === 0 ?
                                    <input type='checkbox' onChange={(e: any) => { chooseAll(e) }} ></input> :
                                    <input type='checkbox' checked={(props.data.length === props.data.filter((student: any) => student.checkValue).length ? true : false)} onChange={(e: any) => { chooseAll(e) }} ></input>
                            }
                        </th>
                        <th>수강생 이름</th>
                        <th>E-mail</th>
                        <th>Github ID</th>
                        <th>직전 기수</th>
                        <th>현재 기수</th>
                    </>
                    :
                    props.tab === '2' ?
                        <>
                            <th>
                                {
                                    props.data.length === 0 ?
                                        <input type='checkbox' onChange={(e: any) => { chooseAll(e) }} ></input> :
                                        <input type='checkbox' checked={(props.data.length === props.data.filter((student: any) => student.checkValue).length ? true : false)} onChange={(e: any) => { chooseAll(e) }} ></input>
                                }
                            </th>
                            <th>수강생 이름</th>
                            <th>직전 기수</th>
                            <th>현재 기수</th>
                            <th>
                                <CheckToolBar
                                    setGitCheck={props.setGitCheck}
                                    gitCheck={props.gitCheck}
                                    setSlackCheck={props.setSlackCheck}
                                    slackCheck={props.slackCheck}
                                    calendar={props.calendar}
                                    setCalendar={props.setCalendar}
                                    tab={props.tab}
                                    data={props.data}
                                    setData={props.setData}
                                />
                            </th>
                            <th>
                                <tr>
                                    <th>Github Check</th>
                                    <th>Slack Check</th>
                                    <th>Calendar Check</th>
                                </tr>
                            </th>
                            <th>Github ID</th>


                        </> :
                        <>
                            <th>직전 기수</th>
                            <th>현재 기수</th>
                            <th>Github ID</th>
                        </>
            }

        </tr>
    );
};

const StateSection = styled.section`
    padding: 1em;
    background: green;
`

const SpanDevied = styled.span`
    padding: 20px;
`