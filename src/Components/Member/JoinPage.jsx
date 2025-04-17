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
    overflow:hidden;
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



`

const Container = styled.div`
    background: #FAF7F7;
    padding: 20px;
    padding-top: 30px;
    border-radius: 25px;
    border: 3px solid #DDDDDD;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 630px;
    display: flex; 
    flex-direction: column;
    margin-top: 10px;
    align-items: center; 

`

const InputGroup = styled.div`
   display: flex;
   margin-bottom: 10px;
   margin-top: 10px;
`
const ZipsaNameLabel = styled.div`
    background-image: url('/img/zipsaName.png');
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
    background-image: url('/img/catName.png');
    width: 95px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 7px;
`


const NewImageLabel = styled.div`
    background-image: url('/img/catImage.png');
    width:135px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: 23px;
    margin-left: 20px;
    margin-bottom: 5px;
`
const EmailLabel = styled.div`
    background-image: url('/img/email2.png');
    width:135px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: -40px;
    margin-left: 28px;
    margin-bottom: 5px;
`
const PasswordLabel = styled.div`
    background-image: url('/img/password2.png');
    width:135px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-right: -30px;
    margin-left: 20px;
    margin-bottom: 5px;
`

const PlusImageInput = styled.div`
    width: 200px;
    height: 180px;
    border: 1px solid #ECEAEA;
    background-color:#FEFBFB;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);  
    justify-content:center;
    display:flex;
    margin:-20px;
    border-radius: 50%;
    align-items: center;
    position: relative;
    
`
const SubmitBtn = styled.div`
    background-image: url('/img/zipsaInsert.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 100px;
    margin-top: 20px;
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
    background-image: url('/img/complete.png');
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
    margin-top:5px;  
    margin-left:5px;

    cursor:pointer;
`

const HandleInput = styled.input`
    display: none;
`
const ImgDelete = styled.span`
  color: #ff4747; /* 빨간색으로 변경 */
  font-size: 30px; /* 크기를 키움 */
  font-weight: bold; /* 글씨 굵게 */
  cursor: pointer; /* 클릭 가능 표시 */
  transition: transform 0.2s ease, color 0.3s ease; /* 부드러운 변환 효과 */
  position: absolute; /* 절대 위치 설정 */
  top: -5px; /* 상단에서 10px */
  right: 0px; /* 우측에서 10px */
  
  &:hover {
    color: #ff1a1a; /* 호버 시 색상 변환 */
    transform: scale(1.1); /* 클릭 시 살짝 커짐 */
  }

  &:active {
    transform: scale(0.95); /* 클릭할 때 살짝 줄어드는 효과 */
  }
`

function JoinPage(props) {
    const nav = useNavigate ();
    //이미지 미리보기
    
    const [imgPreview, setImgPreview] = useState('');
    const [profile, setProfile] = useState({
        memberNo : 0,
        zipsaName:'',
        catName: '',
        email:'',
        password:'',
        newImage: '',
        joinDate:'',
    });
    


    
 

    const handleZipsaName = (e) => {

        setProfile(prev => ({
            ...prev,
            zipsaName:e.target.value
            
        }))
    }
    const handleCatName = (e) => {

        setProfile(prev => ({
            ...prev,
            catName:e.target.value
            
        }))
    }
    const handleEmail = (e) => {

        setProfile(prev => ({
            ...prev,
            email:e.target.value
            
        }))
    }
    const handlePassword = (e) => {

        setProfile(prev => ({
            ...prev,
            password:e.target.value
            
        }))
    }
    

    //파일 확장자 체크
    const regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");

    function checkExtension(fileName, fileSize) {

        const MAX_SIZE = 5 * 1024 * 1024;

        if (fileSize >= MAX_SIZE) {
            alert("파일 사이즈 초과");
            return false;
        }
        if (regex.test(fileName)) {
            alert("해당 종류의 파일은 업로드 할 수 없습니다.");
            return false;
        }
        return true;
    }



   


    ////파일 업로드
    const handleImageUpload = async (e) => {

        console.log("파일 선택됨");
        
        //file에 최근 업로드 한 파일 저장
        const file = e.target.files[0];


        //파일이 선택 안 하면 alert창
        // if (!file) {
        //     alert("파일을 선택하세요");
        //     return;
        // }


        //formData객체 생성(key, value)형태
        const formData = new FormData();
        formData.append("uploadFile", file);


        //api 연결
        try {
            const response = await axios.post('/api/member/uploadFile', formData)

            console.log("File upload success" + response.data);

      

            setProfile(prev => ({
                ...prev,
                newImage : `/images/${response.data}` 
            }));
        } catch (err) {
            console.error("File upload failed:", err);
        }

        console.log(file);

        //파일 미리보기
        if (file && checkExtension(file.name, file.size)) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgPreview = event.target.result;
                console.log("img + " + imgPreview);
        
                setImgPreview(imgPreview); // 미리보기용 imgPreview 저장
            };
            reader.readAsDataURL(file);
        }
    }


    const handleUploadClick = () => {
        document.getElementById('imgFile').click();
    }

    const handleImgDelete = () => {

        setImgPreview('');
        setProfile(prev => ({
            ...prev,
            newImage : ''
        }))

        const formData = new FormData();
        formData.delete("uploadFile");

        const imgFile = document.querySelector('#imgFile');
        imgFile.value = "";

    }




    const handleJoin =  () => {
         axios.post("/api/member/join", profile)
         .then(response =>{
             
                 console.log("회원가입 결과", response.data);
             
                 if (response.data === "Join Success") {
                   alert("회원가입 성공!");
                   nav("/LoginPage"); // 가입 후 이동 경로 지정
                 }if (response.data === "emailCheckFail") {
                    alert("이메일이 중복되었습니다.");
                 } else {
                   alert("회원가입 실패! 다시 확인해주세요.");
                 }

         }

         ) 
       
      };

return (
    <Wrapper>
      <h2>프로필</h2>
        <Container>
            <InputGroup>
                <ZipsaNameLabel></ZipsaNameLabel>
                <Input>
                    <InputField type="text" name="zipsaName" value={profile.zipsaName || ""} onChange={handleZipsaName}></InputField>
                </Input>
            </InputGroup>
            <InputGroup>
                <CatNameLabel></CatNameLabel>
                <Input>
                    <InputField type="text" name="catName" value={profile.catName || ""} onChange={handleCatName}></InputField>
                </Input>
            </InputGroup>
            <InputGroup>
                <EmailLabel></EmailLabel>
                <Input>
                    <InputField type="email" name="email" value={profile.email || ""} onChange={handleEmail}></InputField>
                </Input>
            </InputGroup>
            <InputGroup>
                <PasswordLabel></PasswordLabel>
                <Input>
                    <InputField type="password" name="password" value={profile.password || ""} onChange={handlePassword}></InputField>
                </Input>
            </InputGroup>
            <InputGroup>
                <NewImageLabel></NewImageLabel>
            </InputGroup>
            <InputGroup>
                <PlusImageInput onClick={handleUploadClick}>
                   
                    {imgPreview !==  ''?   
                    <ImgDelete onClick={(e) => {
                        e.stopPropagation();
                        handleImgDelete();
                    }}>&times;
                    </ImgDelete> : ''}

                    {imgPreview && (
                    <img
                        src={imgPreview}
                        alt="미리보기"
                        style={{ width: "200px", height: "180px", borderRadius: "50%" }}
                    />
                    )}
                
                    <HandleInput
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*"
                        id="imgFile"
                        name="uploadFile"
                    />
                        
                    
                    {imgPreview !== '' ? null : <PlusImageBtn/>}
               
                </PlusImageInput>
            </InputGroup>
    

        </Container>
        <SubmitBtn onClick={handleJoin}>
            <ButtonTxt ></ButtonTxt>
        </SubmitBtn>
    </Wrapper>
    )
}

export default JoinPage;