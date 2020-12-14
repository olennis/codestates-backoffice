// @flow 
import React from 'react';
import styled from "styled-components"
import { GoogleCalendar } from "../atoms/GoogleCalendar"
import { GithubTeam } from '../atoms/GithubTeam';
import { Slack } from '../atoms/Slack';
import Checkbox from '@material-ui/core/Checkbox';

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
    pageNum: any
    splitData: any
    view: any
};

export const StateBar = (props: Props) => {



    const chooseAll = (e: any) => {
        let checked = e.target.checked
        if (e.target.checked === true) {
            if (props.view === '1') {
                props.setCheckNum(props.data.length)
            }
            else {
                props.setCheckNum(props.checkNum + props.splitData[0][Number(props.pageNum) - 1].length)
            }
        }
        else if (e.target.checked === false) {
            if (props.view === '1') {
                props.setCheckNum(0)
            }
            else {
                props.setCheckNum(props.checkNum - props.splitData[0][Number(props.pageNum) - 1].length)
            }
        }
        props.setData(props.data.map((student: any) => {
            if (props.view === '1') {
                student.checkValue = checked
            }
            else if (props.view !== '1') {
                for (let i = 0; i < props.splitData[0][Number(props.pageNum) - 1].length; i += 1) {
                    if (student.id === props.splitData[0][Number(props.pageNum) - 1][i].id) {
                        student.checkValue = checked
                    }

                }
            }

            return student
        }))

    }


    return (
        <Header>
            {
                props.tab === '1' ?
                    <TableTr>
                        <TableTh>
                            {
                                props.view === '1' ?

                                    <Checkbox color="primary" checked={((props.data.length === props.data.filter((student: any) => student.checkValue).length ? true : false))} onChange={(e: any) => { chooseAll(e) }} ></Checkbox> :
                                    <Checkbox color="primary" checked={((props.splitData[0][Number(props.pageNum) - 1].length === props.splitData[0][Number(props.pageNum) - 1].filter((student: any) => student.checkValue).length ? true : false))} onChange={(e: any) => { chooseAll(e) }} ></Checkbox>


                            }
                        </TableTh>
                        <TableTh>Name</TableTh>
                        <TableTh>E-mail</TableTh>
                        <TableTh>Github ID</TableTh>
                        <TableTh>Past</TableTh>
                        <TableTh>Current</TableTh>
                    </TableTr>
                    :
                    props.tab === '2' ?
                        <tr>
                            <th>
                                {
                                    props.data.length === 0 ?
                                        <Checkbox color='primary' onChange={(e: any) => { chooseAll(e) }} ></Checkbox> :
                                        props.view === '1' ?
                                            <Checkbox color="primary" checked={((props.data.length === props.data.filter((student: any) => student.checkValue).length ? true : false))} onChange={(e: any) => { chooseAll(e) }} ></Checkbox> :
                                            <Checkbox color="primary" checked={((props.splitData[0][Number(props.pageNum) - 1].length === props.splitData[0][Number(props.pageNum) - 1].filter((student: any) => student.checkValue).length ? true : false))} onChange={(e: any) => { chooseAll(e) }} ></Checkbox>
                                }
                            </th>
                            <th>Name</th>
                            <th>Past</th>
                            <th>Current</th>

                            <GithubTeam
                                setGitCheck={props.setGitCheck}
                                gitCheck={props.gitCheck}
                                data={props.data}
                                setData={props.setData} />
                            <Slack
                                setSlackCheck={props.setSlackCheck}
                                slackCheck={props.slackCheck}
                                data={props.data}
                                setData={props.setData}
                            />
                            <GoogleCalendar
                                setCalendar={props.setCalendar}
                                calendar={props.calendar}
                                data={props.data}
                                setData={props.setData} />
                        </tr> :
                        <tr>
                            <th>직전 기수</th>
                            <th>현재 기수</th>
                            <th>Github ID</th>
                        </tr>
            }

        </Header>
    );
};


const Header = styled.thead`
    background-color:rgb(253, 253, 255);
    line-height:6vh;
    
`
const TableTh = styled.th`
    
`
const TableTr = styled.tr`
    border:solid rgb(238,238,240) 4px
`