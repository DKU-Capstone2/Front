const MyMenu = ({ firstMenu, secondMenu, thirdMenu }) => {
  return (
    <header className="MyMenu">
      <div className="firstMenu">{firstMenu}</div>
      <div className="secondMenu">{secondMenu}</div>
      <div className="thirdMenu">{thirdMenu}</div>
    </header>
  );
};

export default MyMenu;
