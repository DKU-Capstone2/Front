import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

const RequestItem = ({ index, title, name }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/Request/${index}`);
  };

  return (
    <div className="perRequest" onClick={goDetail}>
      <div className="RequestInfo">
        <div className="RequestIndex">{index}</div>
        <div className="RequestName">{name}</div>
        <div className="RequestTitle">{title}</div>
      </div>
      <div>
        <MyButton text={"상세보기"} />
      </div>
    </div>
  );
};

export default RequestItem;
