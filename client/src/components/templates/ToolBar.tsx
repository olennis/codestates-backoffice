import React from 'react';
import styled from 'styled-components';

const ToolBar = () => {
    let test = <input type="checkbox" />
    return (
        <ToolStyle>

            <table>
                {test}이름<th>직전기수</th>
            </table>
        </ToolStyle >
    );
};

export const ToolStyle = styled.div`
    font-size: 30px;
    color: red;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid; 
    border-right-style: solid;
`;


export default ToolBar;

