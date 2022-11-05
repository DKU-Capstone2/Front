import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WriterCategory } from "../App";
import CategoryList from "../Category/CategoryList";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import MyMenu from "../components/MyMenu";

const MainPageAfter = () => {
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
          leftChild={<MyButton text={"My"} onClick={() => navigate("/My")} />}
          rightChild={<MyButton text={"Logout"} />}
        />
      </div>
      <div className="MainPage">
        <div className="writersImg">
          <img src={process.env.PUBLIC_URL + `img/mainpage.jpg`} />
        </div>
        <div className="Intro">
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
        </div>
        <div className="MainCategoryList">
          <CategoryList
            type0={
              <MyButton text={"미지정"} onClick={() => navigate("/Category")} />
            }
            type1={
              <MyButton
                text={"단편소설"}
                onClick={() => navigate("/Category")}
              />
            }
            type2={
              <MyButton
                text={"중·장편소설"}
                onClick={() => navigate("/Category")}
              />
            }
            type3={
              <MyButton
                text={"지식·에세이"}
                onClick={() => navigate("/Category")}
              />
            }
            type4={
              <MyButton
                text={"글귀·문구"}
                onClick={() => navigate("/Category")}
              />
            }
            type5={
              <MyButton text={"피드백"} onClick={() => navigate("/Category")} />
            }
            type6={
              <MyButton text={"기타"} onClick={() => navigate("/Category")} />
            }
            type7={
              <MyButton text={"전체"} onClick={() => navigate("/Category")} />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageAfter;
