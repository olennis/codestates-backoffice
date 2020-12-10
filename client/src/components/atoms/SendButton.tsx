// @flow 
import React, { useEffect } from 'react';
import axios from 'axios';
type Props = {
    data: any
    cohort: any
    nth: any
    gitCheck: any
    slackCheck: any
    calendar: any
    action: any
    setData: any
};
export const SendButton = (props: Props) => {
    const sendData = () => {
        console.log(props.data, '버튼 클릭!')
        const people = props.data.reduce((arr: any, student: any) => {
            if (student.checkValue) {
                arr.push(student.id)
            }
            return arr
        }, [])
        const sendingData = {
            people: people,
            github: props.gitCheck,
            slack: props.slackCheck,
            calendar: props.calendar
        }
        console.log(sendingData, 'sendingData')
        if (props.action === '1') {
            console.log('탑승 API 실행')
        }
        else if (props.action === '2') {
            axios
                .post(
                    `https://q4xflu1p8i.execute-api.us-east-1.amazonaws.com/dev/moveTools`, sendingData,
                )
                .then((res) => {
                    console.log(res.data)
                    props.setData(props.data.map((student: any) => {
                        for (let i = 0; i < res.data.results.length; i += 1) {
                            if (res.data.results[i].user.name === student.name) {
                                student.result = res.data.results[i].result
                            }
                        }
                        return student
                    }))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else if (props.action === '3') {
            console.log('하차 API 실행')
        }
        else {
            console.log('made by COE')
        }
    }
    return (
        <span>
            <button onClick={() => { sendData() }}>가자가자가자가자가자!</button>
        </span>
    );
};