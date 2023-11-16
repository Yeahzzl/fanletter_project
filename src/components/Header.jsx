import React, { useState } from "react";
import { styled } from "styled-components";
import bannerImg from "../assets/avengersImg.png";

function Header({ setClick }) {
  // const bannerImg = require("../assets/avengers.jpg");

  /*
 // 버튼 클릭시 색상이 유지되게 하기
  이거 실패였음...focus로 기능하고 있었던것..
  const [click, setClick] = useState(0);
  const getClick = () => {
    setClick(!click);
  };
  <Tab className={click ? "active" : ""} onClick={getClick}>
*/

  return (
    <Container>
      <Wrapper $image={bannerImg}></Wrapper>
      <Title>Avengers</Title>
      <Contents>Fan Letter</Contents>
      <TabBox>
        <Tab onClick={() => setClick("토르")}>토르</Tab>
        <Tab onClick={() => setClick("블랙위도우")}>블랙위도우</Tab>
        <Tab onClick={() => setClick("캡틴아메리카")}>캡틴아메리카</Tab>
        <Tab onClick={() => setClick("닥터스트레인지")}>닥터스트레인지</Tab>
      </TabBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 120vh;
  /* background-color: yellow; */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${({ $image }) => $image});
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: orange; */
  background-size: 100%;
`;
const Title = styled.h1`
  font-size: 130px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  margin: 100px 0 30px 0;
`;

const Contents = styled.h3`
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const TabBox = styled.ul`
  width: 800px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Tab = styled.button`
  width: 150px;
  height: 60px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #282828;
  margin: 15px;
  border: 2px solid #282828;
  border-radius: 100px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: #ffa704;
    color: white;
    border-style: none;
  }
  &:active {
    background-color: #ffa704;
    transform: scale(1.1);
    transition: all 0.3s;
  }
  &:focus {
    background-color: #ffa704;
    color: white;
    border-style: none;
  }
`;

export default Header;
