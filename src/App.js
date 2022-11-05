import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Category from "./Category/Category";
import Commision from "./Commision/Commision";
import MyNew from "./components/MyNew";
import HowToUse from "./Main/HowToUse";
import Introduce from "./Main/Introduce";
import MainPageAfter from "./Main/MainPageAfter";
import MainPageBefore from "./Main/MainPageBefore";
import Reader from "./Reader/Reader";
import Join from "./User/Join";
import Login from "./User/Login";
import MyPage from "./User/MyPage";
import Writer from "./Writer/Writer";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  return newState;
};

const dummyData = [
  {
    id: 0,
    name: "뿌뿌",
    like_number: 10, //좋아요
    main_category: 1,
    content: "안녕하세요 반갑습니다.",
    date: 1667502453000,
    state: 0,
  },
  {
    id: 1,
    name: "꾸꾸",
    like_number: 4,
    main_category: 2,
    content: "로맨스 주로 다뤄요!",
    date: 1667502453030,
    state: 0,
  },
  {
    id: 2,
    name: "리액트",
    like_number: 22,
    main_category: 0,
    content: "언제든 문의 주세요",
    date: 1667502453050,
    state: 1,
  },
];

export const ReaderList = React.createContext();
export const WriterCategory = React.createContext();
export const CategoryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(3);

  // 커미션 신청에 대한 함수들
  //CREATE
  const onCreate = (name, title, date, commisionContext) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        name,
        title: title,
        date: new Date(date).getTime(),
        commisionContext,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, name, title, date, commisionContext) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        name,
        title: title,
        date: new Date(date).getTime(),
        commisionContext,
      },
    });
  };

  return (
    <WriterCategory.Provider value={data}>
      <CategoryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<MainPageAfter />} />
              <Route path="/aaa" element={<MainPageBefore />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Join" element={<Join />} />
              <Route path="/Category" element={<Category />} />
              <Route path="/Commision" element={<Commision />} />
              <Route path="/Writer/:id" element={<Writer />} />
              <Route path="/New/:id" element={<MyNew />} />
              <Route path="/Introduce" element={<Introduce />} />
              <Route path="/HowToUse" element={<HowToUse />} />
              <Route path="/Reader" element={<Reader />} />
              <Route path="/My" element={<MyPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CategoryDispatchContext.Provider>
    </WriterCategory.Provider>
  );
}

export default App;
