const MyPageList = ({ firstMenu, secondMenu, thirdMenu, fourthMenu }) => {
  return (
    <header className="MyPageList">
      <div className="firstMenu">{firstMenu}</div>
      <div className="secondMenu">{secondMenu}</div>
      <div className="thirdMenu">{thirdMenu}</div>
      <div className="fourthMenu">{fourthMenu}</div>
    </header>
  );
};

export default MyPageList;
