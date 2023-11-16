import React, { useState } from "react";
import { styled } from "styled-components";

function CardList({ click }) {
  const [cardList, setCardList] = useState([
    {
      createdat: "2023-11-16T12:00:00Z",
      nickname: "토르팬",
      avatar: "https://i.imgur.com/45678901.png",
      content: "토르 파이팅! 천둥의 신, 지구를 지켜라!",
      id: 1,
      writedto: "토르",
    },
    {
      createdat: "2023-11-16T12:01:00Z",
      nickname: "닥터스트레인지팬",
      avatar: "https://i.imgur.com/89012345.png",
      content: "닥터스트레인지 파이팅! 마법의 힘으로 지구를 구해줘!",
      id: 2,
      writedto: "닥터스트레인지",
    },
    {
      createdat: "2023-11-16T12:02:00Z",
      nickname: "캡틴아메리카팬",
      avatar: "https://i.imgur.com/67890123.png",
      content: "캡틴아메리카 파이팅! 정의의 수호자, 지구를 지켜라!",
      id: 3,
      writedto: "캡틴아메리카",
    },
    {
      createdat: "2023-11-16T12:03:00Z",
      nickname: "블랙위도우팬",
      avatar: "https://i.imgur.com/23456789.png",
      content: "블랙위도우 파이팅! 지구의 최강 스파이, 악당들을 물리쳐라!",
      id: 4,
      writedto: "블랙위도우",
    },
    {
      createdat: "2023-11-16T12:04:00Z",
      nickname: "어벤져스팬",
      avatar: "https://i.imgur.com/01234567.png",
      content: "어벤져스 파이팅! 지구의 수호자, 악당들을 물리쳐라!",
      id: 5,
      writedto: "어벤져스",
    },

    {
      createdat: "2023-11-16T12:05:00Z",
      nickname: "토르팬",
      avatar: "https://i.imgur.com/45678901.png",
      content: "토르, 망치로 악당들을 물리쳐라!",
      id: 6,
      writedto: "토르",
    },
    {
      createdat: "2023-11-16T12:06:00Z",
      nickname: "닥터스트레인지팬",
      avatar: "https://i.imgur.com/89012345.png",
      content: "닥터스트레인지, 지혜와 능력으로 악당들을 물리쳐라!",
      id: 7,
      writedto: "닥터스트레인지",
    },
    {
      createdat: "2023-11-16T12:07:00Z",
      nickname: "캡틴아메리카팬",
      avatar: "https://i.imgur.com/67890123.png",
      content: "캡틴아메리카, 정의의 수호자로 악당들을 물리쳐라!",
      id: 8,
      writedto: "캡틴아메리카",
    },
  ]);

  //   const thor = cardList.filter((list)=>{
  //     return writedto: "토르";
  //   });

  return (
    <Container>
      {click !== ""
        ? cardList
            .filter((item) => {
              return item.writedto === click;
            })
            .map((card) => {
              return (
                <Card key={card.id}>
                  {/* <Avatar></Avatar> */}
                  <Name>{card.nickname}</Name>
                  <Time>{card.createdat}</Time>
                  <Text>{card.content}</Text>
                </Card>
              );
            })
        : cardList.map((card) => {
            return (
              <Card>
                {/* <Avatar></Avatar> */}
                <Name>{card.nickname}</Name>
                <Time>{card.createdat}</Time>
                <Text>{card.content}</Text>
              </Card>
            );
          })}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #545454;
  padding-top: 50px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #545454;
  padding: 15px;
  width: 600px;
  height: 150px;
  margin: 15px;
  background-color: white;
  border: 3px solid #545454;
  border-radius: 0px 30px 0px 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Name = styled.p`
  font-size: 20px;
  margin: 7px;
`;
const Time = styled.p`
  font-size: 15px;
  margin: 7px;
`;
const Text = styled.p`
  font-size: 15px;
  margin: 7px;
`;
// const Avatar = styled.image`
//   width: 50px;
//   height: 50px;
//   border-radius: 100px;
//   background-color: black;
// `;

export default CardList;
