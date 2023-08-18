import "./RoomDetail.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const RoomDetail = ({ isOpen, data, onClose }) => {
  return (
    <>
      {/* 상세 페이지 배경 */}
      <div className={classNames("room-detail-background", { active: isOpen })}></div>

      <div className={classNames("room-detail-info", { active: isOpen })}>
        {isOpen && (
          <>
            {/* 상세 페이지 고유 번호  */}
            <span className="room-detail-id">{data.id}</span>

            {/* 상세 페이지 나가기 버튼 */}
            <span className="room-detail-back" onClick={onClose}>
              <b>X</b>
            </span>

            {/* 상세 페이지 제목 라벨 */}
            <label htmlFor="title" className="title-label">
              TTITLE
            </label>

            {/* 상세 페이지 제목  */}
            <h4 id="title" className="room-detail-title">
              {data.title}
            </h4>

            {/* 상세 페이지 인원수 라벨 */}
            <label htmlFor="full" className="full-label">
              FULL
            </label>

            {/* 상세 페이지 인원수 */}
            <h4 id="full" className="room-detail-full">
              {data.full}
            </h4>
            <Link className="room-detail-button">JOIN ROOM</Link>
          </>
        )}
      </div>
    </>
  );
};

export { RoomDetail };
