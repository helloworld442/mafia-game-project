import "./Select.scss";
import DropDown from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

const WriteSelect = memo(({ label, name, options, value, error, onChange }) => {
  return (
    <DropDown name={name} label={label} onChange={onChange}>
      <DropDown.Trigger value={value} error={error} trigger={<WriteSelectTrigger />} />
      <DropDown.Menu>
        {options.map((option, index) => (
          <DropDown.Item key={index} item={option} />
        ))}
      </DropDown.Menu>
    </DropDown>
  );
});

const WriteSelectTrigger = () => {
  return <FontAwesomeIcon icon={faArrowDown} />;
};

export { WriteSelect };
