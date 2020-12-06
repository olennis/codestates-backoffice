// @flow 
import * as React from 'react';
import Alert from '@material-ui/lab/Alert';

type Props = {
    student: any
};
export const Result = (props: Props) => {
    return (
        <span>
            {
                props.student.result.githubJoin === 'SUCCESS' ?
                    <span>🟢</span> :
                    props.student.result.githubJoin === 'FAIL' ?
                        <span>🔴</span> :
                        props.student.result.githubJoin === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.githubKick === 'SUCCESS' ?
                    <span>🟢</span> :
                    props.student.result.githubKick === 'FAIL' ?
                        <span>🔴</span> :
                        props.student.result.githubKick === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.slackJoin === 'SUCCESS' ?
                    <span>🟢</span> :
                    props.student.result.slackJoin === 'FAIL' ?
                        <span>🔴</span> :
                        props.student.result.slackJoin === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.slackKick === 'SUCCESS' ?
                    <span>🟢</span> :
                    props.student.result.slackKick === 'FAIL' ?
                        <span>🔴</span> :
                        props.student.result.slackKick === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.calendarJoin === 'SUCCESS' ?
                    <span>🟢</span> :
                    props.student.result.calendarJoin === 'FAIL' ?
                        <span>🔴</span> :
                        props.student.result.calendarJoin === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.calendarKick === 'SUCCESS' ?
                    <span>🟢</span> :
                    props.student.result.calendarKick === 'FAIL' ?
                        <span>🔴</span> :
                        props.student.result.calendarKick === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
        </span>
    );
};