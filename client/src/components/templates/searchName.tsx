import React,{useState} from 'react';
import Name from '../atoms/NameInput'

const searchName = () => {
    const [name,setName] = useState('')
    return (
        <div>
            <Name setName={setName}></Name>
            <button></button>

        </div>
    );
};

export default searchName;