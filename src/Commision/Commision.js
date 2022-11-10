import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import CommisionRequest from "./CommisionRequest";
import CommisionFinished from "./CommisionFinished";
import CommisionList from "./CommisionList";
import CommisionOngoing from "./CommisionOngoing";
import CommisionWaiting from "./CommisionWaiting";
import LikePost from "./LikePost";
import LikeWriter from "./LikeWriter";

const Commision = ({ authenticated, commisionList, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const [pageContent, setPageContent] = useState(1);

  const changePage = () => {
    if (pageContent === 1) {
      return <LikeWriter />;
    } else if (pageContent === 2) {
      return <LikePost />;
    } else if (pageContent === 3) {
      return <CommisionRequest />;
    } else if (pageContent === 4) {
      return <CommisionOngoing />;
    } else if (pageContent === 5) {
      return (
        <CommisionWaiting
          commisionList={commisionList}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      );
    } else if (pageContent === 6) {
      return <CommisionFinished />;
    }
    return;
  };

  if (authenticated === false) {
    return (
      <div className="unLoginPage">
        <h1>로그인을 먼저 해주세요</h1>
        <div className="unLoginPageArea">
          <MyButton text={"로그인"} onClick={() => navigate("/Login")} />
          <MyButton text={"회원 가입"} onClick={() => navigate("/Join")} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="CommisionListBlock">
          <CommisionList
            first={
              <MyButton text={"관심작가"} onClick={() => setPageContent(1)} />
            }
            second={
              <MyButton text={"관심글"} onClick={() => setPageContent(2)} />
            }
            third={
              <MyButton text={"Request!"} onClick={() => setPageContent(3)} />
            }
          />
          <CommisionList
            first={
              <MyButton text={"진행 중"} onClick={() => setPageContent(4)} />
            }
            second={
              <MyButton text={"신청 중"} onClick={() => setPageContent(5)} />
            }
            third={<MyButton text={"종료"} onClick={() => setPageContent(6)} />}
          />
        </div>
        <div className="CommisionArea">{changePage()}</div>
      </div>
    );
  }
};

export default Commision;
