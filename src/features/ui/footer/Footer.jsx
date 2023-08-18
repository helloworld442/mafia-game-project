import "./Footer.scss";
import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [active, setAcitve] = useState(false);

  const onClickFooterIcon = () => setAcitve(!active);

  return (
    <footer className={classNames("footer-nav", { active })}>
      {/* footer 열람 트리커 버튼 */}
      <h2 className="footer-dash-icon" onClick={onClickFooterIcon}>
        <FontAwesomeIcon icon={faEllipsis} />
      </h2>
    </footer>
  );
};

export { Footer };
