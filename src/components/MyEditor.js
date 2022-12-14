import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "./MyButton";
import MyMenu from "./MyMenu";

const MyEditor = ({ onCreate }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();

  const [state, setState] = useState({
    title: "",
    commisionContext: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.title.length < 1) {
      titleRef.current.focus();
      return;
    }
    if (state.commisionContext.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(id, state.title, state.commisionContext);
    alert("신청이 완료되었습니다.");
    navigate("/Commision", { replace: true });

    setState({
      title: "",
      commisionContext: "",
    });
  };

  return (
    <div>
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
              name="title"
              ref={titleRef}
              value={state.title}
              onChange={handleChangeState}
            ></input>
          </div>
          <div>
            <h2>커미션 내용</h2>
            <textarea
              ref={contentRef}
              name="commisionContext"
              value={state.commisionContext}
              onChange={handleChangeState}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEditor;
