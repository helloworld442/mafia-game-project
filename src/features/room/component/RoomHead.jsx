import "./RoomHead.scss";
import { Button } from "../../ui";

const RoomHead = () => {
  return (
    <div className="room-head">
      {/* 현제 방 갯수 블럭 */}
      {/* <h4 className="room-head-num">300</h4> */}

      {/* 방 만들기 버튼 */}
      <Button id="room-head-button" size="medium" primary>
        Add
      </Button>

      {/* 방 제목과 방 리시트 사이 구분선 */}
      <div className="room-head-bottom-line"></div>
    </div>
  );
};

export { RoomHead };
