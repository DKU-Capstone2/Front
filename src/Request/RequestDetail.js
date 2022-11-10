import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RequestList } from "../App";
import MyButton from "../components/MyButton";
import MyMenu from "../components/MyMenu";

const RequestDetail = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const requestList = useContext(RequestList);

  useEffect(() => {
    if (requestList.length >= 1) {
      const targetRequest = requestList.find(
        (it) => parseInt(it.index) === parseInt(index)
      );
      if (targetRequest) {
        setData(targetRequest);
      } else {
        alert("없는 커미션 요청입니다.");
        navigate("/Request", { replace: true });
      }
    }
  }, [index, requestList]);

  if (!data) {
    return (
      <div>
        <div className="WriterPage">로딩중입니다.</div>
      </div>
    );
  } else {
    return (
      <div className="WriterPage">
        <div className="requestform">
          <MyMenu
            firstMenu={<MyButton text={"<"} onClick={() => navigate("/")} />}
            thirdMenu={<MyButton text={"수정하기"} />}
          />
        </div>
        <div className="requestContent">
          <div className="requestWho">
            <div className="requestIndex">{data.index}</div>
            <div className="requestTitle">{data.title}</div>
            <div className="requestName">작성자 : {data.name}</div>
          </div>
          <div className="requestDate">
            {new Date(data.createdDate).toLocaleString()}
          </div>
          <div className="requestContext">{data.RequestContext}</div>
        </div>
      </div>
    );
  }
};

export default RequestDetail;
