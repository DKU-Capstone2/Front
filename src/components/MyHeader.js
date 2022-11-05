const MyHeader = ({ logo, category, commision, leftChild, rightChild }) => {
  return (
    <header>
      <div className="logo">{logo}</div>
      <div className="category">{category}</div>
      <div className="commision">{commision}</div>
      <div className="leftChild">{leftChild}</div>
      <div className="rightChild">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
