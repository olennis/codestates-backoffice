import React from 'react';

type Props = {
    title: string
}

const Tab: React.FC<Props> = ({ children }) => { //* 여기서의 children 은 해당 Tab 에 들어 갈 데이터
    return <div>{children}</div>
}

export default Tab