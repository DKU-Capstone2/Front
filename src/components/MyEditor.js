import { useContext, useEffect, useRef, useState } from "react";
import { createPath, useNavigate } from "react-router-dom";
import { CategoryDispatchContext } from "../App";
import { getStringDate } from "../utils/date";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import MyMenu from "./MyMenu";

const MyEditor = ({ isEdit, originData }) => {
  const navigate = useNavigate();
  const contentRef = useRef();

  const [title, setTitle] = useState("");
  const [commisionContext, setCommisionContext] = useState("");
  const [date, setDate] = useState(new Date().getTime());

  const { onCreate, onEdit } = useContext(CategoryDispatchContext);

  const handleSubmit = () => {
    if (commisionContext.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit
          ? "커미션 내용을 수정하시겠습니까?"
          : "커미션을 신청하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(title, date, commisionContext);
      } else {
        onEdit(originData.id, title, date, commisionContext);
      }
    }
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setTitle(originData.name);
      setCommisionContext(originData.commisionContext);
    }
  }, [isEdit, originData]);

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

      <div className="commisionform">
        <div>
          <MyMenu
            firstMenu={<MyButton text={"<"} onClick={() => navigate(-1)} />}
            thirdMenu={
              <MyButton text={"커미션 제출하기"} onClick={handleSubmit} />
            }
          />
        </div>

        <div className="MyEditor">
          <h1 className="MyEditorTitle">커미션 신청하기</h1>
          <div>
            <h2>신청 제목</h2>
            <input
              className="input_title"
              name="임시제목"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <h2> 커미션 내용</h2>
            <textarea
              ref={contentRef}
              value={commisionContext}
              onChange={(e) => {
                setCommisionContext(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEditor;
