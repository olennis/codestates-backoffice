// @flow 
import * as React from 'react';
import axios from 'axios'
type Name = {
    name:string
};

// const axiosRequest = () =>{
//     axios.get()
// }

export const NameButton = (Props: Name) => {
    return (
        <span>
            <button onClick={()=>{
                axios.get(
                    `https://3ab605da59b9.ngrok.io/tool/getUserByName?name=${Props.name}`
                    )
                    .then((res)=>{console.log(res)})
                    .catch((err)=>{console.log(err)})
            }}>이름 찾기!</button>
        </span>
    );
};