// @flow 
import * as React from 'react';
import axios from 'axios'
import { Button } from '@material-ui/core';

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
            <Button variant="outlined" color="default" size="large" onClick={() => {

                axios
                    .get(
                        ` https://q4xflu1p8i.execute-api.us-east-1.amazonaws.com/dev/getUsersByName?name=${Props.name}`

                    )
                    .then((res) => {
                        console.log(res)
                        Props.setData(res.data.users)
                    })
                    .catch((err) => { console.log(err) })
            }}>검색</Button>
        </span>
    );
};