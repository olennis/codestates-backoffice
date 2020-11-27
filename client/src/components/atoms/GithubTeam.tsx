// @flow 
import React, { useEffect } from 'react'

type Props = {
    gitCheck: any
    setGitCheck: any
    data: any
    setData:any
};

// const chooseOne = (e:any) => {
//     let checked = e.target.checked
//     props.setData(props.data.map((data:any)=>{
//         if(props.student.id === data.id){
//             data.checkValue = checked
//         }
//         return data
//     }))

// }
export const GithubTeam = (props: Props) => {

    const gitmoji = (event:any) => {
        props.setGitCheck(event.target.checked)
        props.setData(props.data.map((student:any)=>{
            if(student.checkValue && event.target.checked){
                student.gitcheck = true
                console.log(student.gitcheck)
            }
            else{
                student.gitcheck = false
                console.log(student.gitcheck)
            }
            return student
        }))
        
    }

    return (
        <div>
            <input type="checkbox" onClick={(event: any) => gitmoji(event)} /> 깃헙
        </div>
    );
};