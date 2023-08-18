import "./RoomForm.scss";
import { Button, WriteInput, WriteSelect } from "../../ui";
import HeaderLogo from "../../../assets/headerlogo.webp";
import { useState } from "react";

const RoomForm = () => {
  const peopleOptions = ["5~10명", "10~15명", "15~20명"];
  const [form, setForm] = useState({ title: "", people: "" });
  const [errors, setErrors] = useState({ title: "", people: "" });

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length > 15) return "제목의 길이는 (5~15)자로 맞춰주세요";
    if (title.length < 5) return "제목의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const validatePeople = (people) => {
    if (people.trim() === "") return "인원 수를 입력해주세요";
    return "";
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onChangeSelect = (target) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitRoom = (e) => {
    e.preventDefault();
    const titleError = validateTitle(form.title);
    const peopleError = validatePeople(form.people);

    if (titleError || peopleError) {
      setErrors({
        title: titleError,
        people: peopleError,
      });
      return "";
    }

    setForm({ title: "", people: "" });
  };

  return (
    <form id="room-form" onSubmit={onSubmitRoom}>
      <img src={HeaderLogo} alt="Mafia" className="room-form-logo" />

      <WriteInput
        label="TITLE"
        name="title"
        type="text"
        value={form.title}
        error={errors.title}
        onChange={onChangeInput}
      />

      <WriteSelect
        label="PEOPLE"
        name="people"
        value={form.people}
        error={errors.people}
        options={peopleOptions}
        onChange={onChangeSelect}
      />

      <Button size="large" fullWidth primary>
        ADD
      </Button>
    </form>
  );
};

export { RoomForm };
