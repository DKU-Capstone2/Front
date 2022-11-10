import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllWriter } from "../App";
import MyButton from "../components/MyButton";
import CategoryList from "./CategoryList";
import WriterList from "./WriterList";

const sortCategoryList = [
  { value: 0, name: "미지정" },
  { value: 1, name: "단편소설" },
  { value: 2, name: "중·장편소설" },
  { value: 3, name: "지식·에세이" },
  { value: 4, name: "글귀·문구" },
  { value: 5, name: "피드백" },
  { value: 6, name: "기타" },
  { value: 7, name: "전체" },
];

const Category = ({ authenticated }) => {
  const writerList = useContext(AllWriter);
  const copyList = JSON.parse(JSON.stringify(writerList));

  const [data, setData] = useState(writerList);
  const [number, setNumber] = useState(7);

  useEffect(() => {
    if (writerList.length >= 1 && parseInt(number) <= 6) {
      setData(
        writerList.filter(
          (it) =>
            parseInt(it.main_category) ===
            parseInt(sortCategoryList[number].value)
        )
      );
    } else {
      setData(copyList);
    }
  }, [data]);

  const typeReturn0 = () => {
    setNumber(0);
  };
  const typeReturn1 = () => {
    setNumber(1);
  };
  const typeReturn2 = () => {
    setNumber(2);
  };
  const typeReturn3 = () => {
    setNumber(3);
  };
  const typeReturn4 = () => {
    setNumber(4);
  };
  const typeReturn5 = () => {
    setNumber(5);
  };
  const typeReturn6 = () => {
    setNumber(6);
  };
  const typeReturn7 = () => {
    setNumber(7);
  };

  return (
    <div>
      <div>
        <CategoryList
          type0={<MyButton text={"미지정"} onClick={typeReturn0} />}
          type1={<MyButton text={"단편소설"} onClick={typeReturn1} />}
          type2={<MyButton text={"중·장편소설"} onClick={typeReturn2} />}
          type3={<MyButton text={"지식·에세이"} onClick={typeReturn3} />}
          type4={<MyButton text={"글귀·문구"} onClick={typeReturn4} />}
          type5={<MyButton text={"피드백"} onClick={typeReturn5} />}
          type6={<MyButton text={"기타"} onClick={typeReturn6} />}
          type7={<MyButton text={"전체"} onClick={typeReturn7} />}
          isSelected={true}
        />
        <WriterList writerList={data} authenticated={authenticated} />
      </div>
    </div>
  );
};

export default Category;
