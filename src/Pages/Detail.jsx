import React from "react";
import { useNavigate } from "react-router-dom";
import CardDetail from "../components/CardDetail";

function Detail() {
  const navigate = useNavigate();

  return (
    <div>
      <CardDetail />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 이동
      </button>
    </div>
  );
}

export default Detail;
