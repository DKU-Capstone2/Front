import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllWriter } from "../App";
import WriterProfile from "./WriterProfile";

const Writer = ({ authenticated }) => {
  const { id } = useParams();
  const writerList = useContext(AllWriter);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (writerList.length >= 1) {
      const targetWriter = writerList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetWriter) {
        setData(targetWriter);
      } else {
        alert("없는 작가입니다.");
        navigate("/Category", { replace: true });
      }
    }
  }, [id, writerList]);

  if (!data) {
    return (
      <div>
        <div className="WriterPage">로딩중입니다.</div>
      </div>
    );
  } else {
    return (
      <div className="WriterPage">
        <div>
          <WriterProfile
            id={data.id}
            content={data.content}
            name={data.name}
            state={data.state}
            authenticated={authenticated}
          />
        </div>
      </div>
    );
  }
};

export default Writer;
