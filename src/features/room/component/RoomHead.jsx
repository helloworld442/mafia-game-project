import { Tag } from "../../ui";
import "./RoomHead.scss";

const RoomHead = () => {
  return (
    <div className="room-head">
      {/* 방 제목과 방 리시트 사이 구분선 */}
      <div className="room-head-tags">
        <label className="room-head-tag-label people">인원 수</label>
        <Tag tag="5~10" />

        <Tag tag="10~15" />

        <Tag tag="15~20" />

        <Tag tag="full" />
      </div>
      <div className="room-head-tags">
        <label className="room-head-tag-label game">진행 상황</label>
        <Tag tag="진행 중" />

        <Tag tag="대기 중" />
      </div>
      <div className="room-head-bottom-line"></div>
    </div>
  );
};

export { RoomHead };
