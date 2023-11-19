import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import CardList from "../components/CardList";

function Home({ cardList, setCardList }) {
  const navigate = useNavigate();
  const [click, setClick] = useState("");

  return (
    <div>
      <Header setClick={setClick} />
      <Form cardList={cardList} setCardList={setCardList} />
      <CardList
        click={click}
        cardList={cardList}
        setCardList={setCardList}
        navigate={navigate}
      />
    </div>
  );
}

export default Home;
