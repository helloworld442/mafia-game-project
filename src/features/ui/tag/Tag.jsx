import "./Tag.scss";
import { useState } from "react";
import classNames from "classnames";

const Tag = ({ tag }) => {
  const [active, setActive] = useState(false);

  const onToggleTag = () => setActive(!active);

  return (
    <span className={classNames("tag", { active })} onClick={onToggleTag}>
      {tag}
    </span>
  );
};

export { Tag };
