import React,{useState} from 'react';
const NameInput = ({setName}:any) => {
    
    return (
        <div>
            <input 
                name='name' 
                type='text'
                value='name' 
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                ></input>
        </div>
    );
};

export default NameInput;