// @flow 
import React from 'react';
import axios  from 'axios'
type Props = {
    data : any
    cohort : any
    nth : any
    gitCheck : any
    slackCheck : any
    calendar : any
};
export const SendButton = (props: Props) => {
    const sendData = () => {
        
        console.log(props.data,'버튼 클릭!')
        const people = props.data.reduce((arr:any,student:any)=>{
            if(student.checkValue){
                arr.push(student.id)
            }
            return arr
        },[])
        const sendingData = {
            people : people,
            cohort : `${props.cohort} ${props.nth}기`,
            github : props.gitCheck,
            slack : props.slackCheck,
            calendar : props.calendar
        }
        console.log(sendingData,'sendingData')

        axios.post(
            `https://6504244d47ae.ngrok.io/tool/moveCohort`,
            sendingData
            )
            .then((res)=>{
                console.log(res,'post요청 응답')
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return (
        <span>
            <button onClick={()=>{sendData()}}>가자가자가자가자가자!</button>
        </span>
    );
};