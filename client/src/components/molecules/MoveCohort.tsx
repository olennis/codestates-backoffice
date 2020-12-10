// @flow 
import * as React from 'react';

import { Name } from '../atoms/Name'
import { Before } from '../atoms/Before'
import { Present } from '../atoms/Present'
import { StudentCheck } from '../atoms/StudentCheck'
import { Result } from '../atoms/Result'
import styled from 'styled-components'

type Props = {
    student: any,
    index: any,
    data: any,
    setData: any,
    gitCheck: any,
    slackCheck: any,
    calendar: any,
    checkNum: any,
    setCheckNum: any

};
export const MoveCohort = (props: Props) => {
    return (
        <tr>
            <th><StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                setCheckNum={props.setCheckNum}></StudentCheck></th>
            <th><Name student={props.student}></Name></th>
            <th><Before student={props.student}></Before></th>
            <th><Present student={props.student}></Present></th>

            <Emojibottom>
                <td>
                    {
                        props.student.checkValue && props.gitCheck ?
                            <Emoji>🙆🏻‍♂️</Emoji> :
                            <Emoji>🙅🏻‍♀️</Emoji>
                    }
                </td>
                <td>
                    {
                        props.student.checkValue && props.slackCheck ?
                            <Emoji>🙆🏻‍♂️</Emoji> :
                            <Emoji>🙅🏻‍♀️</Emoji>
                    }
                </td>
                <td>{
                    props.student.checkValue && props.calendar ?
                        <Emoji>🙆🏻‍♂️</Emoji> :
                        <Emoji>🙅🏻‍♀️</Emoji>
                }</td>
            </Emojibottom>
            <td>{
                props.student.result ?
                    <Result student={props.student}></Result> :
                    <span></span>
            }</td>
        </tr>
    );
};



const Emojibottom = styled.td`
    
`
const Emoji = styled.th`
    padding:20px;
    font-size:25px;
`