import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";

const Router = ({ cardList, setCardList }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home cardList={cardList} setCardList={setCardList} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail cardList={cardList} setCardList={setCardList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
