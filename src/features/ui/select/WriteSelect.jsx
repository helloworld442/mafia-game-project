import "./Select.scss";
import DropDown from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const WriteSelect = ({ label, name, options, value, error, onChange }) => {
  return (
    <DropDown name={name} onChange={onChange}>
      <DropDown.Trigger value={value} trigger={<WriteSelectTrigger value={value} />} />
      <DropDown.Menu>
        {options.map((option, index) => (
          <DropDown.Item key={index} item={option} />
        ))}
      </DropDown.Menu>
    </DropDown>
  );
};

const WriteSelectTrigger = ({ value }) => {
  return <FontAwesomeIcon icon={faArrowDown} />;
};

export { WriteSelect };
