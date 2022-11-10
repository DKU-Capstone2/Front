import MyEditor from "./MyEditor";

const MyNew = ({ onCreate }) => {
  return (
    <div>
      <MyEditor onCreate={onCreate} />
    </div>
  );
};

export default MyNew;
