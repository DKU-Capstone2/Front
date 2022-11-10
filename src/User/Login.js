import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheck = () => {
    try {
      login({ email, password });
      navigate("/", { replace: true });
    } catch (e) {
      alert("아이디 및 비밀번호를 다시 확인해주세요");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div class="loginpage">
        <div className="Title">
          <h1>LOGIN</h1>
        </div>
        <div class="loginform">
          <form action="/" method="POST">
            <h3>E-MAIL</h3>
            <input
              type="email"
              id="email"
              className="loginfield"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h3>Password</h3>
            <input
              type="password"
              className="loginfield"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="button"
              value="LOGIN"
              id="password_check"
              className="submitBtn"
              onClick={handleCheck}
            />
          </form>
          <div class="joinpage">
            <MyButton text={"Join"} onClick={() => navigate("/Join")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
