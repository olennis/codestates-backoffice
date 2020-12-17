// @flow 
import React from 'react';
import GithubNo from "../atoms/Image/GithubNo.png"
import GithubYes from "../atoms/Image/GithubYes.jpg"
import SlackNo from "../atoms/Image/SlackNo.jpg"
import SlackYes from "../atoms/Image/SlackYes.jpg"

type Props = {
    student: any
};
export const Result = (props: Props) => {
    return (
        <span>
            {
                props.student.result.githubJoin === 'SUCCESS' ?
                    <span style={{ paddingLeft: '5px' }}><img src={GithubYes} width="32" height="32" /></span> :
                    props.student.result.githubJoin === 'FAIL' ?
                        <span style={{ paddingLeft: '5px' }}><img src={GithubNo} width="32" height="32" /></span> :
                        props.student.result.githubJoin === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.githubKick === 'SUCCESS' ?
                    <span style={{ paddingLeft: '5px' }}><img src={GithubYes} width="32" height="32" /></span> :
                    props.student.result.githubKick === 'FAIL' ?
                        <span style={{ paddingLeft: '5px' }}><img src={GithubNo} width="32" height="32" /></span> :
                        props.student.result.githubKick === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.slackJoin === 'SUCCESS' ?
                    <span style={{ paddingLeft: '5px' }}><img src={SlackYes} width="32" height="32" /></span> :
                    props.student.result.slackJoin === 'FAIL' ?
                        <span style={{ paddingLeft: '5px' }}><img src={SlackNo} width="32" height="32" /></span> :
                        props.student.result.slackJoin === 'NONE' ?
                            <span></span> :
                            <span></span>
            }
            {
                props.student.result.slackKick === 'SUCCESS' ?
                    <span style={{ paddingLeft: '5px' }}><img src={SlackYes} width="32" height="32" /></span> :
                    props.student.result.slackKick === 'FAIL' ?
                        <span style={{ paddingLeft: '5px' }}><img src={SlackNo} width="32" height="32" /></span> :
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