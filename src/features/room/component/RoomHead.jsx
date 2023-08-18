import "./RoomHead.scss";

const RoomHead = () => {
  return (
    <div className="room-head">
      {/* 방 제목과 방 리시트 사이 구분선 */}
      <div className="room-head-tags">
        <label className="room-head-tag-label people">인원 수</label>

        <span className="room-head-tag people">5~10</span>

        <span className="room-head-tag people">10~15</span>

        <span className="room-head-tag people">10~20</span>

        <span className="room-head-tag people">full</span>
      </div>
      <div className="room-head-tags">
        <label className="room-head-tag-label game">진행 상황</label>

        <span className="room-head-tag game">진행 중</span>

        <span className="room-head-tag game">대기 중</span>
      </div>
      <div className="room-head-bottom-line"></div>
    </div>
  );
};

export { RoomHead };
