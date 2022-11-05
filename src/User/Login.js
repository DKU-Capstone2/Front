import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Login = () => {
  const navigate = useNavigate();
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
          leftChild={
            <MyButton text={"Login"} onClick={() => navigate("/Login")} />
          }
          rightChild={
            <MyButton text={"Join"} onClick={() => navigate("/Join")} />
          }
        />
      </div>
      <div class="loginpage">
        <div className="Title">
          <h1>LOGIN</h1>
        </div>
        <div class="loginform">
          <form action="/" method="POST">
            <h3>E-MAIL</h3>
            <input type="email" id="email" class="loginfield" />
            <h3>Password</h3>
            <input type="password" class="loginfield" id="password" />
            <input
              type="submit"
              value="LOGIN"
              id="password_check"
              class="submitBtn"
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
