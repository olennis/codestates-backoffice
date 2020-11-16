// @flow 
import * as React from 'react';
import {InputName} from '../atoms/InputName'
import {NameButton} from '../atoms/NameButton'

export const SearchName = () => {
    const [name, setName] = React.useState('')
    return (
        <div>
            <InputName setName={setName}></InputName>
            <NameButton name={name}></NameButton>
        </div>
    );
};