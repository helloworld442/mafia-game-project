import RoomItem from "./RoomItem";
import "./RoomList.scss";

const RoomList = () => {
  return (
    <ul className="room-list">
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
    </ul>
  );
};

export { RoomList };
