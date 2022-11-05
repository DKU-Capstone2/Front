import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import CommisionAsking from "./CommisionAsking";
import CommisionFinished from "./CommisionFinished";
import CommisionList from "./CommisionList";
import CommisionOngoing from "./CommisionOngoing";
import CommisionWaiting from "./CommisionWaiting";
import LikePost from "./LikePost";
import LikeWriter from "./LikeWriter";

const Commision = () => {
  const navigate = useNavigate();

  const [pageContent, setPageContent] = useState(1);

  const changePage = () => {
    if (pageContent === 1) {
      return <LikeWriter />;
    } else if (pageContent === 2) {
      return <LikePost />;
    } else if (pageContent === 3) {
      return <CommisionAsking />;
    } else if (pageContent === 4) {
      return <CommisionOngoing />;
    } else if (pageContent === 5) {
      return <CommisionWaiting />;
    } else if (pageContent === 6) {
      return <CommisionFinished />;
    }
    return;
  };

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
      <div className="CommisionListBlock">
        <CommisionList
          first={
            <MyButton text={"관심작가"} onClick={() => setPageContent(1)} />
          }
          second={
            <MyButton text={"관심글"} onClick={() => setPageContent(2)} />
          }
          third={
            <MyButton
              text={"이런 글 부탁해요!"}
              onClick={() => setPageContent(3)}
            />
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
};

export default Commision;
