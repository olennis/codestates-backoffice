// @flow 
import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
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
            <Button onClick={() => {
                axios
                    .get(
                        ` https://q4xflu1p8i.execute-api.us-east-1.amazonaws.com/dev/getUsersByName?name=${Props.name}`
                    )
                    .then((res) => {
                        Props.setData(res.data.users)
                    })
                    .catch((err) => { console.log(err) })
            }}
                style={{ width: "20%", height: '55px', marginLeft: "5px" }}
            >Go</Button>
        </span>
    );
};


const Button = styled.button`
    background-color: rgb(65, 83, 170);
    border: none;
    border-radius: 5px;
    color: lightgray;
    &:hover {
        color: white;
    };
    &:active {
        transform: translateY(1px);
    }
`