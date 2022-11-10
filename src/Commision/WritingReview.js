import { useContext, useRef } from "react";
import { useState } from "react";
import { ReaderList } from "../App";

const WritingReview = () => {
  const user = useContext(ReaderList);
  const contentRef = useRef();

  const [review, setReview] = useState({
    reader: user.name,
    reviewContent: "",
    score: 5,
    date: new Date().getTime(),
  });

  const handleChangeState = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (review.reviewContent.length < 1) {
      contentRef.current.focus();
      return;
    }
    alert("저장 성공");
  };

  return (
    <div>
      <div className="commisionform">
        <div>
          <MyMenu
            firstMenu={<MyButton text={"<"} onClick={() => navigate(-1)} />}
            thirdMenu={
              <MyButton text={"후기 작성 완료하기"} onClick={handleSubmit} />
            }
          />
        </div>

        <div className="MyEditor">
          <h1 className="MyEditorTitle">후기 작성하기</h1>
          <div>
            <div>별점</div>
            <select
              name="score"
              value={review.score}
              onChange={handleChangeState}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div>
            <h2>후기 내용</h2>
            <textarea
              ref={contentRef}
              value={review.reviewContent}
              onChange={handleChangeState}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingReview;
