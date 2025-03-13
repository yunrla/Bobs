import React from 'react';
import styled from 'styled-components';
import {  useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    padding-top:50px;
`

const Container = styled.div`
    background: #FAF7F7;
    padding: 20px;
    border-radius: 25px;
    border: 3px solid #DDDDDD;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 430px;
    display: flex; 
    flex-direction: column;
    margin-top: 10px;
    align-items: center; 
`

const InputGroup = styled.div`
   display: flex;
   margin-bottom: 10px;
   margin-top: 30px;
`
const EmailLabel = styled.div`
    background-image: url('/img/이메일.png');
    width: 48px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 45px;
    margin-left: 8px;

    
`
const EmailInput = styled.div`
    width: 280px;
    height: 60px;
    border: 1px solid #ECEAEA;
    border-radius: 20px;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);  
    cursor: pointer;
`
const ConfirmLabel = styled.div`
    background-image: url('/img/인증번호.png');
    width: 65px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 35px;
    margin-left: 7px;
`
const ConfirmInput = styled.div`
    width: 185px;
    height: 65px;
    border: 1px solid #ECEAEA;
    border-radius: 20px;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);  
    margin-right: 14px;
    margin-left: 2px;

`
const ConfirmBtn = styled.div`
    width: 80px;
    height: 60px;
    border: 1px solid #FCF8F8;
    border-radius: 25px;
    background-color:#f5efef;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;


`

const ConfirmBtnTxt = styled.div`
    background-image: url('/img/인증.png');
    width: 35px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 13px;


`

const NewPwLabel = styled.div`
    background-image: url('/img/새 비밀번호.png');
    width:85px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 23px;
    margin-left: 2px;
`
const NewPwInput = styled.div`
    width: 280px;
    height: 60px;
    border: 1px solid #ECEAEA;
    border-radius: 20px;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);  
`
const CheckPwLabel = styled.div`
    background-image: url('/img/비밀번호 확인.png');
    width: 99px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 15px;
    margin-left: 2px;
`
const CheckPwInput = styled.div`
    width: 280px;
    height: 60px;
    border: 1px solid #ECEAEA;
    border-radius: 20px;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);  
`
const SubmitBtn = styled.div`
    background-image: url('/img/zipsaInsert.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 100px;
    margin-top: 40px;
    cursor: pointer;
    

    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
`
const InputField = styled.input`
    outline: none;
    width: 200px;
    height: 45px;
    border: none;
    background: none;
    caret-color: #afafb0;
    margin-top:8px;
    margin-left: 10px;
    font-size: 18px;
`
const ButtonTxt = styled.div`
    background-image: url('/img/완료.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 50px;
    margin-left: 2px;
`

function PwChange(props) {
    const nav = useNavigate ();

    function finishPwChange(){
        nav('/finishPwChange');
    }

    return (
        <Wrapper>
          <h2>비밀번호 찾기/변경</h2> 
            <Container>
                <InputGroup>
                    <EmailLabel></EmailLabel>
                    <EmailInput>
                     <InputField type="text"></InputField>
                    </EmailInput>
                </InputGroup>
                <InputGroup>
                    <ConfirmLabel></ConfirmLabel>
                    <ConfirmInput>
                    <InputField type="number"></InputField>
                    </ConfirmInput>
                    <ConfirmBtn><ConfirmBtnTxt/></ConfirmBtn>
                </InputGroup>
                <InputGroup>
                    <NewPwLabel></NewPwLabel>
                    <NewPwInput>
                    <InputField type="password"></InputField>
                    </NewPwInput>
                </InputGroup>
                <InputGroup>
                    <CheckPwLabel></CheckPwLabel>
                    <CheckPwInput>
                    <InputField type="password"></InputField>
                    </CheckPwInput>
                </InputGroup>
        
    
            </Container>
            <SubmitBtn onClick={finishPwChange}>
                <ButtonTxt ></ButtonTxt>
            </SubmitBtn>
        </Wrapper>
    );
}

export default PwChange;