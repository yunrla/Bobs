import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #f3f3f3;
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;  
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;   
    
`
const Title = styled.div`
     width: 200px;
     height: 100px; 
  
`

const TitleLogo = styled.div`
    background-image:url('/img/Bobs.png');
    background-size: contain;
    background-repeat: no-repeat; 
    width: 100%; 
    height: 100%; 
`

const Middle = styled.div`
    width: 150px;
    height: 150px; 
    padding: 50px;
    
`
const MiddleLogo= styled.div`
    background-image:url('/img/icons8-고양이-100.png');
    background-repeat: no-repeat; 
    background-size: contain;
    width: 100%; 
    height: 100%;   
`
const Bottom = styled.div`
    
`
const LoginBtn = styled.div`
    width: 110px;
    height: 40px;
    margin-left:15px;
    border: 1px solid #ECEAEA;
    border-radius: 15px;
    background-color: rgba(242, 240, 240, 0.929);
    box-shadow: 1px 1px 5px rgba(58, 56, 56, 0.3);
    display:flex;
    justify-content: center;  

    &:hover {
        background-color: rgba(220, 220, 220, 0.9); /* hover 시 배경색 변경 */
        box-shadow: 2px 2px 10px rgba(58, 56, 56, 0.5); /* hover 시 그림자 강화 */
    }
`
const LoginText = styled.div`
    background-image: url('/img/Login.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 13px;
    margin-left: 3px;
    width: 37px;
    height: 20px;
`


function MainPage(props) {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }





    return (
        <Wrapper>
            <Container>
                <Title>
                    <TitleLogo></TitleLogo>
                </Title>

                <Middle>
                    <MiddleLogo></MiddleLogo>
                </Middle>

                <Bottom>
                    <LoginBtn onClick={handleLoginClick}>
                        <LoginText></LoginText>
                    </LoginBtn>
                </Bottom>
            </Container>
      
        </Wrapper>
    );
}

export default MainPage;