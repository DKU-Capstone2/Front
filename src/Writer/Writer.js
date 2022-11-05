import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WriterCategory } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import WriterProfile from "./WriterProfile";
import MyProfile from "./WriterProfile";

const Writer = () => {
  const { id } = useParams();
  const writerList = useContext(WriterCategory);
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
        <div className="WriterPage">로딩중입니다.</div>
      </div>
    );
  } else {
    return (
      <div className="WriterPage">
        <div>
          <MyHeader
            logo={<MyButton text={"Writers"} onClick={() => navigate("/")} />}
            category={
              <MyButton
                text={"Catgory"}
                onClick={() => navigate("/Category")}
              />
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
        <div>
          <WriterProfile
            id={data.id}
            content={data.content}
            name={data.name}
            state={data.state}
          />
        </div>
      </div>
    );
  }
};

export default Writer;