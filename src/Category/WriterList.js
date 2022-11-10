import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";
import WriterItem from "./WriterItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "best", name: "베스트작가" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const WriterList = ({ writerList, authenticated }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessWriterList = () => {
    const filterCallBack = (item) => {
      if (filter === "best") {
        return parseInt(item.like_number) >= 10;
      }
    };

    const compare = (a, b) => {
      if (sortType == "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(writerList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div className="WriterList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
      </div>
      {getProcessWriterList().map((it) => (
        <WriterItem key={it.id} {...it} authenticated={authenticated} />
      ))}
    </div>
  );
};

export default WriterList;
