import { Link, useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

const LogoutHeader = ({ logout }) => {
  const navigate = useNavigate();

  const Logout = () => {
    alert("로그아웃 하시겠습니까?");
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header>
      <div className="logo">
        <MyButton
          text={"Writers"}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="category">
        <MyButton
          text={"Category"}
          onClick={() => {
            navigate("/Category");
          }}
        />
      </div>
      <div className="commision">
        <MyButton
          text={"Commision"}
          onClick={() => {
            navigate("/Commision");
          }}
        />
      </div>
      <div className="request">
        <MyButton
          text={"Request!"}
          onClick={() => {
            navigate("/Request");
          }}
        />
      </div>
      <div className="leftChild">
        <MyButton
          text={"My"}
          onClick={() => {
            navigate("/My");
          }}
        />
      </div>
      <div className="rightChild">
        <MyButton text={"Logout"} onClick={Logout} />
      </div>
    </header>
  );
};

export default LogoutHeader;
