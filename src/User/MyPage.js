import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllWriter } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import ChangeMyInfo from "./ChangeMyInfo";
import ChangePassword from "./ChangePassword";
import CoinCharging from "./CoinCharging";
import DeleteMyAccount from "./DeleteMyAccount";
import MyPageList from "./MyPageList";

const MyPage = ({ user }) => {
  const [pageContent, setPageContent] = useState(1);

  const changePage = () => {
    if (pageContent === 1) {
      return <ChangeMyInfo user={user} />;
    } else if (pageContent === 2) {
      return <ChangePassword />;
    } else if (pageContent === 3) {
      return <CoinCharging />;
    } else if (pageContent === 4) {
      return <DeleteMyAccount />;
    }
    return;
  };
  return (
    <div>
      <div className="MyInfo">
        <div className="MyInfoTitle">
          <MyPageList
            firstMenu={
              <MyButton
                text={"개인 정보 변경"}
                onClick={() => setPageContent(1)}
              />
            }
            secondMenu={
              <MyButton text={"계정 보안"} onClick={() => setPageContent(2)} />
            }
            thirdMenu={
              <MyButton text={"코인 충전"} onClick={() => setPageContent(3)} />
            }
            fourthMenu={
              <MyButton text={"계정 탈퇴"} onClick={() => setPageContent(4)} />
            }
          />
        </div>
        <div className="MyInfoContent">{changePage()}</div>
      </div>
    </div>
  );
};

export default MyPage;
