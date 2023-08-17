import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RoomDetail.scss";
import classNames from "classnames";
import { faX } from "@fortawesome/free-solid-svg-icons";

const RoomDetail = ({ isOpen, data, onClose }) => {
  return (
    <div className={classNames("room-detail", { active: isOpen })}>
      {isOpen && (
        <>
          <span className="room-detail-id">{data.id}</span>
          <span className="room-detail-back" onClick={onClose}>
            <b>X</b>
          </span>
        </>
      )}
    </div>
  );
};

export { RoomDetail };
