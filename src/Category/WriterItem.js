import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

const sortCategoryList = [
  { value: 0, name: "미지정" },
  { value: 1, name: "단편소설" },
  { value: 2, name: "중·장편소설" },
  { value: 3, name: "지식·에세이" },
  { value: 4, name: "글귀·문구" },
  { value: 5, name: "피드백" },
  { value: 6, name: "기타" },
  { value: 7, name: "전체" },
];
const WriterItem = ({
  id,
  name,
  like_number,
  main_category,
  content,
  genre,
  Date,
}) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/Writer/${id}`);
  };

  const goCommision = () => {
    navigate(`/New/${id}`);
  };

  return (
    <div className="WriterItem">
      <div className={["img_wrapper", `img_wrapper_${id}`].join(" ")}>
        <img src={process.env.PUBLIC_URL + `img/book${id}.png`} />
      </div>
      <div className="info_wrapper">
        <div className="writer_name">{name}</div>
        <div className="writer_information">{content.slice(0, 25)}</div>
        <div className="writer_category">
          #{sortCategoryList[main_category].name}
        </div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"상세보기"} onClick={goDetail} />
        <MyButton text={"커미션신청하기"} onClick={goCommision} />
      </div>
    </div>
  );
};

export default WriterItem;
