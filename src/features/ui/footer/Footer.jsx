import "./Footer.scss";
import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [active, setAcitve] = useState(false);

  const onClickFooterIcon = () => setAcitve(!active);

  return (
    <footer className="footer-nav">
      {/* footer 배경화면 모자이크 처리 */}
      <div className={classNames("footer-background", { active })}></div>

      {/* footer info 화면 에니매이션 추가 */}
      <div className={classNames("footer-info", { active })}>
        {/* footer 열람 트리커 버튼 */}
        <h2 className="footer-dash-icon" onClick={onClickFooterIcon}>
          <FontAwesomeIcon icon={faEllipsis} />
        </h2>
      </div>
    </footer>
  );
};

export { Footer };
