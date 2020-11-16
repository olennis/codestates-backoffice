// @flow 
import * as React from 'react';
import styled from 'styled-components'
type Props = {

};
export const CheckToolBar = (props: Props) => {
    return (
        <CheckToolSection>
            나는 툴 체크박스
        </CheckToolSection>
    );
};

const CheckToolSection = styled.section`
    padding: 1em;
    background: yellow;
`