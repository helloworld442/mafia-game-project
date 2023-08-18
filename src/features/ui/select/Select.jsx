import classNames from "classnames";
import "./Select.scss";
import { createContext, useContext, useState } from "react";

const DropDownContext = createContext(null);

const DropDown = ({ children, name, label, onChange }) => {
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
        <div className="drop-down">
          <label className="drop-down-label">{label}</label>
          {children}
        </div>
      </>
    </DropDownContext.Provider>
  );
};

const DropDownTrigger = ({ value, error, trigger }) => {
  const { onOpenSelect } = useContext(DropDownContext);

  return (
    <div className={classNames("drop-down-trigger-box", { error })} onClick={onOpenSelect}>
      <span className="drop-down-value">{value}</span>
      <span className="drop-down-trigger">{trigger}</span>
      <span className="drop-down-error">{error}</span>
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
