import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "../Category/CategoryList";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MyMenu from "../components/MyMenu";

// 로그인 하기 전에 임시용 페이지 입니다.

const MainPageBefore = () => {
  const navigate = useNavigate();

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || " ";

  return (
    <div>
      <div>
        <MyHeader
          logo={<MyButton text={"Writers"} onClick={() => navigate("/")} />}
          category={
            <MyButton text={"Catgory"} onClick={() => navigate("/Category")} />
          }
          commision={
            <MyButton
              text={"Commision"}
              onClick={() => navigate("/Commision")}
            />
          }
          leftChild={
            <MyButton text={"Login"} onClick={() => navigate("/Login")} />
          }
          rightChild={
            <MyButton text={"Join"} onClick={() => navigate("/Join")} />
          }
        />
      </div>
      <div className="MainPage">
        <div className="writersImg">
          <img src={process.env.PUBLIC_URL + `img/mainpage.jpg`} />
        </div>
        <div className="HowToUse">
          <MyMenu
            firstMenu={
              <MyButton
                text={"Writers 소개 글"}
                onClick={() => navigate("/Introduce")}
              />
            }
            thirdMenu={
              <MyButton
                text={"Writers 이용하는 법"}
                onClick={() => navigate("/HowToUse")}
              />
            }
          />
          <div>
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageBefore;
