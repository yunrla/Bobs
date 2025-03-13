import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    width: 100%;
    height: 50px;
`

const Logo = styled.div`
    background-image: url('/img/B.png');
    width: 40px;
    height: 40px;
    background-size:contain;
    background-repeat:no-repeat;
    margin-left: 10px;
    margin-top: 10px;
`
function Header(props) {
    return (
        <Div>
            <Logo/>
        </Div>
    );
}

export default Header;