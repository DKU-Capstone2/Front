import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Commnuity from "../User/Commnuity";
import Portfolio from "./Portfolio";
import Review from "./Review";
import MyButton from "../components/MyButton";
import MyMenu from "../components/MyMenu";

const WriterState = [
  { value: 0, name: "접수중" },
  { value: 1, name: "접수 불가능" },
];

const WriterProfile = ({ id, content, name, state }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || " ";

  const [pageContent, setPageContent] = useState(1);

  const changePage = () => {
    if (pageContent === 1) {
      return <Commnuity />;
    } else if (pageContent === 2) {
      return <Portfolio />;
    } else if (pageContent === 3) {
      return <Review />;
    }
    return;
  };

  const navigate = useNavigate();

  const likefunction = () => {
    alert("관심작가로 등록되었습니다.");
  };

  return (
    <div className="writerProfile">
      <div className="profileList">
        <MyMenu
          firstMenu={<MyButton text={"<"} onClick={() => navigate(-1)} />}
          secondMenu={
            <MyButton text={"관심작가 등록하기"} onClick={likefunction} />
          }
          thirdMenu={
            <MyButton
              text={"커미션 신청하기"}
              onClick={() => navigate(`/New/${id}`)}
            />
          }
        />
      </div>
      <div className="mainProfile">
        <div className="imgProfile">
          <img
            src={process.env.PUBLIC_URL + `img/book${id}.png`}
            alt="profile"
          />
        </div>
        <div className="profileName">{name}</div>
        <div className="profileState">{WriterState[state].name}</div>
        <div className="profileContent">{content}</div>
      </div>
      <div>
        <div className="profileMenu">
          <MyMenu
            firstMenu={
              <MyButton text={"커뮤니티"} onClick={() => setPageContent(1)} />
            }
            secondMenu={
              <MyButton text={"포트폴리오"} onClick={() => setPageContent(2)} />
            }
            thirdMenu={
              <MyButton
                text={"후기 및 평점"}
                onClick={() => setPageContent(3)}
              />
            }
          />
        </div>
        <div>
          <div>{changePage()}</div>
        </div>
      </div>
    </div>
  );
};

export default WriterProfile;
