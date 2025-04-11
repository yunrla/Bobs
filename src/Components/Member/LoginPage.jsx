import React from 'react';
import styled from 'styled-components';
import {  useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    padding-top:140px;

`

const Container = styled.div`
    display:flex;
    justify-content: center;  
    align-items: center;  
    flex-direction: column;

`
const LoginBox = styled.div`
    background: #FAF7F7;
    padding: 20px;
    border-radius: 25px;
    border: 3px solid #DDDDDD;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    height: 200px;
    display:flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center;  
    margin-top:20px;
`
const IdBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; 
    justify-content: flex-start; 
    margin-top:10px;
`
const PwBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; 
    justify-content: flex-start; 
    margin-top:20px;
`

const WriteId = styled.div`
    width: 230px;
    height: 70px;
    border: 1px solid #ECEAEA;
    border-radius: 20px;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    
`
const IdLabel = styled.div`
    background-image: url('/img/zipsaName.png');
    background-size:contain;
    background-repeat: no-repeat;
    width: 70px;
    height: 20px;
    margin-right: 20px;
    margin-top: 3px;
`
const PwLabel = styled.div`
    background-image: url('/img/password.png');
    background-size:contain;
    background-repeat: no-repeat;
    width:64px;
    height: 20px;
    margin-right: 22px;
    margin-left: 5px;
    margin-top: 3px;
`

const PwChangeBtn  = styled.button`
    margin-right: 55px;
    justify-content: center; 
    align-items: center;
    font-size: 14px;
    padding-top: 10px;
    text-decoration: none;
    color: #000000; 
    font-weight: 600;
    border: none;
    margin-left: 45px;
    cursor:pointer;
`
const JoinBtn = styled.button`
    margin-right: 55px;
    justify-content: center; 
    align-items: center;
    font-size: 14px;
    padding-top: 10px;
    text-decoration: none;
    color: #000000; 
    font-weight: 600;
    border: none;
    cursor:pointer;
`


const Button = styled.div`
    background-image: url('/img/zipsaInsert.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 100px;
    margin-top: 60px;
    cursor: pointer;
    

    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
`

const ButtonTxt = styled.div`
    background-image: url('/img/go.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 50px;
    margin-left: 2px;
`

const InputField = styled.input`
    outline: none;
    width: 200px;
    height: 45px;
    border: none;
    background: none;
    caret-color: #afafb0;
    margin-top:12px;
    margin-left: 10px;
    font-size: 18px;
`

const InputField2 = styled.input`
    outline: none;
    width: 200px;
    height: 40px;
    border: none;
    background: none;
    caret-color: #afafb0;
    margin-top:15px;
    margin-left: 10px;
    font-size: 18px;
`


function LoginPage(props) {
    const nav = useNavigate()

    function goPwChange(){
        nav('/pwChange');
    }

    function goJoin(){
        nav('/goJoin');
    }

    function goMissionList() {
        nav('/goMissionList');
    }

    return (
        <Wrapper>
                  <h2>로그인</h2>

            <Container>
                <LoginBox>
                    <IdBox>
                            <IdLabel/>
                            <WriteId>
                                <InputField type="text"></InputField>
                            </WriteId>
                    </IdBox>
                    <PwBox>
                            <PwLabel/>
                            <WriteId>
                                <InputField2 type="password"></InputField2>
                            </WriteId>
                    </PwBox>
                </LoginBox>

                <div>
                        <PwChangeBtn onClick={goPwChange}>비밀번호 찾기/변경</PwChangeBtn>
                        <JoinBtn onClick={goJoin}>집사 등록</JoinBtn>
                </div> 

                <Button onClick={goMissionList}>
                    <ButtonTxt ></ButtonTxt>
                </Button>
            
            
            </Container>
        </Wrapper>
        
    );
}

export default LoginPage;