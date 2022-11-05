const ChangePassword = () => {
  return (
    <div className="DefaultMyPage">
      <div>
        <h1>비밀번호 변경</h1>
      </div>
      <div className="changePassword">
        <h2>
          <label for="passWord">PASSWORD</label>
        </h2>
        <div>
          <input type="password" id="passWord" class="signUpForm" />
        </div>
        <h2>
          <label for="CheckUserPassword">PASSWORD CHECK</label>
        </h2>
        <div>
          <input type="password" id="CheckUserPassword" class="signUpForm" />
        </div>
        <div className="btndiv">
          <input type="submit" value="변경하기" className="submitBtn" />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
