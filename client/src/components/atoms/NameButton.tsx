// @flow 
import * as React from 'react';
import axios from 'axios'
type Name = {
    name: string,
    setData: any
};

// const axiosRequest = () =>{
//     axios.get()
// }

export const NameButton = (Props: Name) => {
    return (
        <span>
            <button onClick={() => {
                axios.get(
                    ` https://c152b948ccfa.ngrok.io/tool/getUserByName?name=${Props.name}`
                )
                    .then((res) => {
                        console.log(res)
                        Props.setData(res.data)
                    })
                    .catch((err) => { console.log(err) })
            }}>이름 찾기!</button>
        </span>
    );
};