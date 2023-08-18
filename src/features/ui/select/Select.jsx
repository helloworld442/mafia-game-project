import classNames from "classnames";
import "./Select.scss";
import { createContext, useContext, useState } from "react";

const DropDownContext = createContext(null);

const DropDown = ({ children, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => {
    setIsOpen(true);
    onChange({ name, value: "" });
  };

  const onCloseSelect = (item) => {
    setIsOpen(false);
    onChange({ name, value: item });
  };

  return (
    <DropDownContext.Provider value={{ isOpen, onOpenSelect, onCloseSelect }}>
      <>
        <div className={classNames("drop-down-background", { isOpen })}></div>
        <div className="drop-down">{children}</div>
      </>
    </DropDownContext.Provider>
  );
};

const DropDownTrigger = ({ value, trigger }) => {
  const { onOpenSelect } = useContext(DropDownContext);

  return (
    <div className="drop-down-trigger-box" onClick={onOpenSelect}>
      <span className="drop-down-value">asf</span>
      <span className="drop-down-trigger">{trigger}</span>
    </div>
  );
};

const DropDownMenu = ({ children }) => {
  const { isOpen } = useContext(DropDownContext);

  return isOpen && <ul className="drop-down-menu">{children}</ul>;
};

const DropDownItem = ({ item }) => {
  const { onCloseSelect } = useContext(DropDownContext);

  return (
    <li className="drop-down-item" onClick={() => onCloseSelect(item)}>
      {item}
    </li>
  );
};

DropDown.Trigger = DropDownTrigger;
DropDown.Menu = DropDownMenu;
DropDown.Item = DropDownItem;

export default DropDown;
