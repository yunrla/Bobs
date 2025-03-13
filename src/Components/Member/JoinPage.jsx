import React from 'react';
import styled from 'styled-components';
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    padding-top:30px;

`

const Container = styled.div`
    background: #FAF7F7;
    padding: 20px;
    border-radius: 25px;
    border: 3px solid #DDDDDD;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 480px;
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
const JibsaNameLabel = styled.div`
    background-image: url('/img/집사 이름.png');
    width: 78px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 35px;
    margin-left: 8px;
    
`
const Input = styled.div`
    width: 280px;
    height: 60px;
    border: 1px solid #ECEAEA;
    border-radius: 20px;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);  
    cursor: pointer;
`
const CatNameLabel = styled.div`
    background-image: url('/img/고양이 이름.png');
    width: 95px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 25px;
    margin-left: 7px;
`


const NewImageLabel = styled.div`
    background-image: url('/img/고양이 사진 등록.png');
    width:135px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 23px;
    margin-left: 12px;
`

const PlusImageInput = styled.div`
    width: 380px;
    height: 180px;
    border: 1px solid #ECEAEA;
    border-radius: 20px;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);  
    justify-content:center;
    display:flex;
    margin:-20px;
    
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
const PlusImageBtn = styled.div`
    background-image: url('/img/plus.png');
    width: 60px;
    height: 60px;
    background-size: contain;
    background-repeat:no-repeat;
    margin-top:55px;



    
`


function JoinPage(props) {
    const nav = useNavigate ();
    const [profile, setProfile] = useState({
        jibsaName:"",
        catName: "",
        newImage: null,
    });


    
    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setProfile((prev) => ({
            ...prev,
            newImage:file
        }))
    }

    const SuccessJoin = () => {
        const formData = new FormData();
        formData.append("jibsaName", profile.jibsaName);
        formData.append("catName", profile.catName);
        if (profile.newImage) {
            formData.append("newImage", profile.newImage);
        }

        axios
            .post("/api/signup", formData,{
                headers : {
                    "Content-Type" : "multipart/form-data",
                },
            })
            .then((response) => {
                console.log("회원가입 성공 :", response);
                        
                // nav('/SuccessJoin');
            })
            .catch((error) => {
                console.error("회원가입 실패 :". error);
            });

    }



return (
    <Wrapper>
      <h2>프로필</h2>
        <Container>
            <InputGroup>
                <JibsaNameLabel></JibsaNameLabel>
                <Input>
                    <InputField type="text" name="jibsaName" value={profile.jibsaName} onChange={handleInputChange}></InputField>
                </Input>
            </InputGroup>
            <InputGroup>
                <CatNameLabel></CatNameLabel>
                <Input>
                    <InputField type="text" name="catName" value={profile.catName} onChange={handleInputChange}></InputField>
                </Input>
            </InputGroup>
            <InputGroup>
                <NewImageLabel></NewImageLabel>
            </InputGroup>
            <InputGroup>
                <PlusImageInput>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*"
                        id="image-upload"
                    />
                    <PlusImageBtn/>
                </PlusImageInput>
            </InputGroup>
    

        </Container>
        <SubmitBtn onClick={SuccessJoin}>
            <ButtonTxt ></ButtonTxt>
        </SubmitBtn>
    </Wrapper>
    )
}

export default JoinPage;