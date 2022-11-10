import { Link } from "react-router-dom";

const MyHeader = ({ logo, category, commision, leftChild, rightChild }) => {
  return (
    <header>
      <div className="logo">
        <Link to={{ pathname: "/" }}>{logo}</Link>
      </div>
      <div className="category">
        <Link to={{ pathname: "/Category" }}>{category}</Link>
      </div>
      <div className="commision">
        <Link to={{ pathname: "/Commision" }}>{commision}</Link>
      </div>
      <div className="leftChild">
        <Link to={{ pathname: "/Login" }}>{leftChild}</Link>
      </div>
      <div className="rightChild">
        <Link to={{ pathname: "/Join" }}>{rightChild}</Link>
      </div>
    </header>
  );
};

export default MyHeader;
