import CommisionItem from "./CommisionItem";

const CommisionWaiting = ({ commisionList, onDelete, onEdit }) => {
  return (
    <div className="CommisionAreaDetail">
      <h1>커미션 신청 중</h1>
      <h2>{commisionList.length}개가 신청 중입니다</h2>
      <div className="CommisionWaitingTotal">
        {commisionList.map((it) => (
          <CommisionItem
            key={it.index}
            {...it}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default CommisionWaiting;
