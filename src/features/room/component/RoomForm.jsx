import "./RoomForm.scss";
import { Button, WriteInput, WriteSelect } from "../../ui";
import HeaderLogo from "../../../assets/headerlogo.webp";

const RoomForm = () => {
  const peopleOptions = ["5~10명", "10~15명", "15~20명"];

  return (
    <form id="room-form">
      <img src={HeaderLogo} alt="Mafia" className="room-form-logo" />

      <WriteInput label="TITLE" type="text" />

      <WriteSelect options={peopleOptions} />

      <Button size="large" fullWidth primary>
        ADD
      </Button>
    </form>
  );
};

export { RoomForm };
