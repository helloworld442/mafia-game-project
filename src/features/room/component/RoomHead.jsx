import "./RoomHead.scss";
import { Button } from "../../ui";

const RoomHead = () => {
  return (
    <div className="room-head">
      <h4 className="room-head-num">현재 방 : 300</h4>
      <Button id="room-head-button" size="medium" primary>
        Add
      </Button>
      <line className="room-head-bottom-line"></line>
    </div>
  );
};

export { RoomHead };
