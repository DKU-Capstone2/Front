import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyMenu from "../components/MyMenu";

const Requestform = ({ onRequest }) => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();

  const [state, setState] = useState({
    title: "",
    RequestContext: "",
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
    if (state.RequestContext.length < 1) {
      contentRef.current.focus();
      return;
    }
    onRequest(state.title, state.RequestContext);
    alert("신청이 완료되었습니다.");
    navigate("/Request", { replace: true });

    setState({
      title: "",
      RequestContext: "",
    });
  };

  return (
    <div>
      <div className="commisionform">
        <div>
          <MyMenu
            firstMenu={<MyButton text={"<"} onClick={() => navigate(-1)} />}
            thirdMenu={<MyButton text={"부탁하기!"} onClick={handleSubmit} />}
          />
        </div>

        <div className="MyEditor">
          <h1 className="MyEditorTitle">이런 글 부탁해요!</h1>
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
              name="RequestContext"
              value={state.RequestContext}
              onChange={handleChangeState}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestform;
