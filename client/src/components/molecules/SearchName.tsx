// @flow 
import React ,{useState} from 'react';
import {InputName} from '../atoms/InputName'
import {NameButton} from '../atoms/NameButton'

type Props = {
    setName:any,
    setData:any,
    name:string
 };

export const SearchName = (props:Props) => {
    
    return (
        <div>
            <InputName setName={props.setName}></InputName>
            <NameButton name={props.name} setData={props.setData}></NameButton>
        </div>
    );
};