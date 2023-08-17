import "./RoomItem.scss";

const RoomItem = () => {
  return (
    <li className="room-item">
      <h4 className="room-item-id">1</h4>
      <h2 className="room-item-title">채팅 룸입니당</h2>
      <span className="room-item-info">
        <h4 className="room-item-full">1 / 8</h4>
        <h4 className="room-item-game start">start</h4>
      </span>
    </li>
  );
};

export default RoomItem;
