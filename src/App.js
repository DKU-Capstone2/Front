import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Category from "./Category/Category";
import Commision from "./Commision/Commision";
import MyNew from "./components/MyNew";
import HowToUse from "./Main/HowToUse";
import Introduce from "./Main/Introduce";
import MainPage from "./Main/MainPage";
import Request from "./Request/Request";
import RequestDetail from "./Request/RequestDetail";
import Requestform from "./Request/Requestform";
import Join from "./User/Join";
import Login from "./User/Login";
import MyPage from "./User/MyPage";
import { signIn } from "./utils/Auth";
import LoginHeader from "./utils/LoginHeader";
import LogoutHeader from "./utils/LogoutHeader";
import Writer from "./Writer/Writer";

const dummyData = [
  {
    id: 0,
    name: "뿌뿌",
    like_number: 10, //좋아요
    main_category: 1,
    content: "안녕하세요 반갑습니다.",
    date: 1667502453000,
    state: 0,
    job: "작가",
  },
  {
    id: 1,
    name: "꾸꾸",
    like_number: 4,
    main_category: 2,
    content: "로맨스 주로 다뤄요!",
    date: 1667502453030,
    state: 0,
    job: "작가",
  },
  {
    id: 2,
    name: "리액트",
    like_number: 22,
    main_category: 0,
    content: "언제든 문의 주세요",
    date: 1667502453050,
    state: 1,
    job: "작가",
  },
];

export const RequestList = React.createContext();
export const AllWriter = React.createContext();

function App() {
  // 로그인 및 로그아웃에 대한 함수들
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const login = ({ email, password }) => {
    setUser(signIn({ email, password }));
    setAuthenticated(true);
  };
  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    setCommisionList(null);
  };

  const dataIndex = useRef(1);

  console.log(user);

  // 커미션 신청에 대한 함수들
  const [commisionList, setCommisionList] = useState([]);
  const onCreate = (id, title, commisionContext) => {
    const createdDate = new Date().getTime();
    const newItem = {
      index: dataIndex.current,
      name: user.name,
      createdDate,
      commisionContext,
      title,
      writer: dummyData[id].name,
    };
    dataIndex.current++;
    setCommisionList([newItem, ...commisionList]);
  };

  const onEdit = (targetindex, newCommisionContent) => {
    setCommisionList(
      commisionList.map((it) =>
        it.index === targetindex
          ? { ...it, commisionContext: newCommisionContent }
          : it
      )
    );
  };

  const onDelete = (targetindex) => {
    const newItemList = commisionList.filter((it) => it.index !== targetindex);
    setCommisionList(newItemList);
  };

  // 이런글 부탁해요 작성함수
  const RequestIndex = useRef(1);
  const [requestList, setRequestList] = useState([]);
  const onRequest = (title, RequestContext) => {
    const createdDate = new Date().getTime();
    const newItem = {
      index: RequestIndex.current,
      name: user.name,
      createdDate,
      RequestContext,
      title,
    };
    RequestIndex.current++;
    setRequestList([newItem, ...requestList]);
  };

  return (
    <RequestList.Provider value={requestList}>
      <AllWriter.Provider value={dummyData}>
        <BrowserRouter>
          <div className="App">
            <div>
              {authenticated ? (
                <LogoutHeader logout={logout} />
              ) : (
                <LoginHeader />
              )}
            </div>
            <main>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Login" element={<Login login={login} />} />
                <Route path="/Join" element={<Join />} />
                <Route
                  path="/Category"
                  element={<Category authenticated={authenticated} />}
                />
                <Route
                  path="/Commision"
                  element={
                    <Commision
                      authenticated={authenticated}
                      commisionList={commisionList}
                      onDelete={onDelete}
                      onEdit={onEdit}
                    />
                  }
                />
                <Route
                  path="/Request"
                  element={
                    <Request
                      requestList={requestList}
                      authenticated={authenticated}
                    />
                  }
                />
                <Route path="/Request/:index" element={<RequestDetail />} />
                <Route
                  path="/Writer/:id"
                  element={<Writer authenticated={authenticated} />}
                />
                <Route
                  path="/New/:id"
                  element={<MyNew onCreate={onCreate} />}
                />
                <Route
                  path="/Requestform"
                  element={<Requestform onRequest={onRequest} />}
                />
                <Route path="/Introduce" element={<Introduce />} />
                <Route path="/HowToUse" element={<HowToUse />} />
                <Route path="/My" element={<MyPage user={user} />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </AllWriter.Provider>
    </RequestList.Provider>
  );
}

export default App;
