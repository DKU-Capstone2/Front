const ChangeMyInfo = () => {
  return (
    <div className="DefaultMyPage">
      <div>
        <h1>개인 정보 변경</h1>
      </div>
      <div className="Area">
        <div className="MyInfoForm">
          <h2>IMAGE</h2>
          <div class="imgtmp"></div>
          <h2>
            <label for="name">NAME</label>
          </h2>
          <input id="name"></input>
          <h2>
            <label for="email">EMAIL</label>
          </h2>
          <input id="email"></input>
          <h2>
            <label for="state">STATE</label>
          </h2>
          <div className="changeStateDiv">
            <div>작가</div>
            <select class="role_change" id="state" className="changeState">
              <option selected value="0">
                활동
              </option>
              <option value="1">비활동</option>
              <option value="2">독자 전환</option>
            </select>
          </div>
          <h2>
            <label for="phone_number">PHONE NUMBER</label>
          </h2>
          <input id="phone_number"></input>
          <div className="btndiv">
            <input type="submit" value="변경하기" className="submitBtn"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeMyInfo;
