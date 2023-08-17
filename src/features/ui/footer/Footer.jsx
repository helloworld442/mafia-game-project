import "./Footer.scss";
import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [active, setAcitve] = useState(false);

  const onClickFooter = () => setAcitve(true);

  return (
    <footer className={classNames("footer-nav", { active })} onClick={onClickFooter}>
      {!active ? (
        <h2 className="footer-dash-icon">
          <FontAwesomeIcon icon={faEllipsis} />
        </h2>
      ) : null}
    </footer>
  );
};

export { Footer };
