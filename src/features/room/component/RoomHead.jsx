import "./RoomHead.scss";
import HeaderLogo from "../../../assets/headerlogo.png";

const RoomHead = () => {
  return (
    <aside className="room-head">
      <img className="room-head-logo" src={HeaderLogo} alt="mafia-logo" />
    </aside>
  );
};

export { RoomHead };
