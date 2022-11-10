const ChangeMyInfo = ({ user }) => {
  const differentSelect = () => {
    if (user.job === "독자") {
      return (
        <select class="role_change" id="state" className="changeState">
          <option selected value="독자">
            독자
          </option>
          <option value="작가">작가 전환</option>
        </select>
      );
    } else if (user.job === "작가") {
      <select class="role_change" id="state" className="changeState">
        <option selected value="독자">
          독자
        </option>
        <option value="독자">작가 전환</option>
      </select>;
    } else if (user.job === "none") {
      <select class="role_change" id="state" className="changeState">
        <option selected value="작가">
          작가
        </option>
        <option value="독자">독자</option>
      </select>;
    }
  };

  return (
    <div className="DefaultMyPage">
      <div>
        <h1>개인 정보 변경</h1>
      </div>
      <div className="Area">
        <div className="MyInfoForm">
          <h2>
            <label for="name">NAME</label>
          </h2>
          <input id="name" value={user.name}></input>
          <h2>
            <label for="email">EMAIL</label>
          </h2>
          <input id="email" value={user.email}></input>
          <h2>
            <label for="state">STATE</label>
          </h2>
          <div className="changeStateDiv">
            <div className="nowState">{user.job}</div>
            {differentSelect()}
          </div>
          <h2>
            <label for="phone_number">PHONE NUMBER</label>
          </h2>
          <input id="phone_number" value={user.phone_number}></input>
          <div className="btndiv">
            <input type="submit" value="변경하기" className="submitBtn"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeMyInfo;
