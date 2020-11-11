import React,{useState} from 'react';
const NameInput = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <input
                type='text'
                value={name}
                placeholder='수강생의 이름을 입력해주세요' 
                onChange={(e)=>{
                    setName(e.target.value)
                    console.log(name)
                }}
                >

                </input>
                <button>클릭!</button>
        </div>
    );
};

export default NameInput;