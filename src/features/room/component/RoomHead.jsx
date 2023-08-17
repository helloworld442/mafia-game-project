import "./RoomHead.scss";
import { Button } from "../../ui";

const RoomHead = () => {
  return (
    <div className="room-head">
      <Button id="room-head-button" size="medium" primary>
        Add
      </Button>
      <line className="room-head-bottom-line"></line>
    </div>
  );
};

export { RoomHead };
