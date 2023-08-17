import "./RoomDetail.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const RoomDetail = ({ isOpen, data, onClose }) => {
  return (
    <div className={classNames("room-detail", { active: isOpen })}>
      {isOpen && (
        <>
          <span className="room-detail-id">{data.id}</span>
          <span className="room-detail-back" onClick={onClose}>
            <b>X</b>
          </span>
          <label htmlFor="title" className="title-label">
            TTITLE
          </label>
          <h4 id="title" className="room-detail-title">
            {data.title}
          </h4>
          <label htmlFor="full" className="full-label">
            FULL
          </label>
          <h4 id="full" className="room-detail-full">
            {data.full}
          </h4>
          <Link className="room-detail-button">JOIN ROOM</Link>
        </>
      )}
    </div>
  );
};

export { RoomDetail };
