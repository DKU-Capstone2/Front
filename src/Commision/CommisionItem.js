import { useRef, useState } from "react";
import MyButton from "../components/MyButton";

const CommisionItem = ({
  index,
  name,
  createdDate,
  commisionContext,
  title,
  writer,
  onDelete,
  onEdit,
}) => {
  const handleDelete = () => {
    if (window.confirm(`${index}번째 커미션 신청을 취소하시겠습니까?`)) {
      onDelete(index);
    }
  };

  const [localContent, setLocalContent] = useState(commisionContext);
  const [isEdit, setIsEdit] = useState(false);
  const localContentInput = useRef();

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(commisionContext);
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleEdit = () => {
    if (localContent.length < 1) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${index}번째 신청 내용을 수정하시겠습니까?`)) {
      onEdit(index, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="CommisionItem">
      <div className="itemIndex">
        신청 번호 : {index} | 신청자 : {name} | 작가 : {writer}
        <div>신청 날짜 : {new Date(createdDate).toLocaleString()}</div>
      </div>
      <div className="itemTitle"> 제목 : {title}</div>
      <div className="itemContext">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{commisionContext}</>
        )}
      </div>
      <div>
        {isEdit ? (
          <>
            <MyButton text={"수정취소"} onClick={handleQuitEdit} />
            <MyButton text={"수정완료"} onClick={handleEdit} />
          </>
        ) : (
          <>
            <MyButton text={"수정하기"} onClick={toggleIsEdit} />
            <MyButton text={"취소하기"} onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export default CommisionItem;
