import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

const LoginHeader = () => {
  const navigate = useNavigate();

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
          text={"Login"}
          onClick={() => {
            navigate("/Login");
          }}
        />
      </div>
      <div className="rightChild">
        <MyButton
          text={"Join"}
          onClick={() => {
            navigate("/Join");
          }}
        />
      </div>
    </header>
  );
};

export default LoginHeader;
