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
        <tbody>
            <tr>
                <td><StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                    setCheckNum={props.setCheckNum}></StudentCheck></td>
                <td><Name student={props.student}></Name></td>
                <td><Before student={props.student}></Before></td>
                <td><Present student={props.student}></Present></td>
                {
                    props.student.checkValue && props.gitCheck ?
                        <Emoji>🙆🏻‍♂️</Emoji> :
                        <Emoji>🙅🏻‍♀️</Emoji>
                }

                {
                    props.student.checkValue && props.slackCheck ?
                        <Emoji>🙆🏻‍♂️</Emoji> :
                        <Emoji>🙅🏻‍♀️</Emoji>
                }

                {
                    props.student.checkValue && props.calendar ?
                        <Emoji>🙆🏻‍♂️</Emoji> :
                        <Emoji>🙅🏻‍♀️</Emoji>
                }

                <td>{
                    props.student.result ?
                        <Result student={props.student}></Result> :
                        <span></span>
                }</td>
            </tr>
        </tbody>
    );
};


const Emoji = styled.td`
    padding:20px;
    font-size:25px;
`