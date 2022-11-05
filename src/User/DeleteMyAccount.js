const DeleteMyAccount = () => {
  return (
    <div className="DefaultMyPage">
      <div>
        <h1>계정탈퇴</h1>
      </div>
      <div className="Area DeleteArea">
        <h2>경고 : 계정 삭제시 라이터스에 존재하는 모든 기록은 삭제됩니다.</h2>
        <input type="submit" value="삭제하기" className="submitBtn" />
      </div>
    </div>
  );
};

export default DeleteMyAccount;
