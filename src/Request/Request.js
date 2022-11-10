import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyMenu from "../components/MyMenu";
import RequestItem from "./RequestItem";

const Request = ({ requestList, authenticated }) => {
  const navigate = useNavigate();

  const goRequest = () => {
    if (authenticated === false) {
      alert("로그인을 먼저 해주세요");
      navigate("/Login");
    } else {
      navigate("/Requestform");
    }
  };

  console.log(requestList);

  return (
    <div>
      <div className="requestform">
        <MyMenu
          firstMenu={<MyButton text={"<"} onClick={() => navigate("/")} />}
          thirdMenu={<MyButton text={"작성하기"} onClick={goRequest} />}
        />
      </div>
      <div className="requestList">
        <h1>이런 글 부탁해요!</h1>
        <div>
          {requestList.map((it) => (
            <RequestItem key={it.index} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Request;
