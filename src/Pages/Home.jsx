import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import CardList from "../components/CardList";

function Home() {
  const navigate = useNavigate();
  const [click, setClick] = useState("");

  return (
    <div>
      <Header setClick={setClick} />
      <Form />
      <CardList click={click} />
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        Detail로 이동
      </button>
    </div>
  );
}

export default Home;
