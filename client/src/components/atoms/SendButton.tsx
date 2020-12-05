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
            cohort: `${props.cohort} ${props.nth}기`,
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
                    `https://q4xflu1p8i.execute-api.us-east-1.amazonaws.com/dev/moveTools`, sendingData
                )
                .then((res) => {
                    //1. res.data 받아옴 >> [{name:[1,2,3,4,5,6]}]

                    props.setData(
                        props.data.map((student: any) => {
                            let successValue;
                            for (let i = 0; i < res.data.length; i += 1) {
                                for (let key in res.data[i]) {
                                    if (key === student.name) {
                                        if (res.data[i][key]) {//.split('_').includes('fail')
                                            for (let j = 0; j < res.data[i][key].length; j += 1) {
                                                if (res.data[i][key][j].split('_').includes('fail')) {
                                                    console.log(j, res.data[i][key][j].split('_'))
                                                    successValue = false
                                                }
                                                else {
                                                    console.log('뭐여시벌')
                                                    successValue = true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return { 'successValue': successValue, name: student.name, email: student.email, githubUserName: student.githubUserName, log: student.log, id: student.id, googleId: student.googleId }
                        }))



                    console.log(props.data, 'data check')


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
