import "./RoomItem.scss";
import { RoomDetail } from "./RoomDetail";
import { useState } from "react";
import BloodImg from "../../../assets/blood.png";
import BloodImg2 from "../../../assets/blood2.png";
import BloodImg3 from "../../../assets/blood3.png";

const RoomItem = () => {
  const imgData = [BloodImg, BloodImg2, BloodImg3];
  const randomNumber = Math.floor(Math.random() * 3);
  const data = {
    id: 1,
    title: "채팅 룹입니당",
    full: "1 / 8",
    game: "start",
    imgsrc: imgData[randomNumber],
  };
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => setIsOpen(true);

  const onClostModal = () => setIsOpen(false);

  return (
    <>
      <li className="room-item" onClick={onOpenModal}>
        {/* 방 고육 배경화면 */}
        <img className="room-item-background" src={imgData[randomNumber]} alt="bloodImg" />

        {/* 방 고유 아이디 */}
        <h4 className="room-item-id">1</h4>

        {/* 방 고유 제목 */}
        <h2 className="room-item-title">채팅 룸입니당</h2>

        {/* 방 관련 정보 */}
        <div className="room-item-info">
          <h4 className="room-item-full">1 / 8</h4>
          <h4 className="room-item-game start">start</h4>
        </div>
      </li>

      {/* 방 상세페이지 컴포넌트 */}
      <RoomDetail isOpen={isOpen} data={data} onClose={onClostModal} />
    </>
  );
};

export default RoomItem;
