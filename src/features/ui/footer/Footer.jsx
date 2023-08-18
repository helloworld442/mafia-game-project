import "./Footer.scss";
import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowCircleDown,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [active, setAcitve] = useState(false);
  const [close, setClose] = useState(false);

  const onClickFooterIcon = () => setAcitve(!active);

  const onClickDownIcon = () => setClose(!close);

  return (
    <footer className="footer-nav">
      {/* footer 배경화면 모자이크 처리 */}
      <div className={classNames("footer-background", { active, close })}></div>

      {/* footer info 화면 에니매이션 추가 */}
      <div className={classNames("footer-info", { active, close })}>
        {/* footer 열람 트리커 버튼 */}
        <h2 className={classNames("footer-dash-icon", { close })} onClick={onClickFooterIcon}>
          <FontAwesomeIcon icon={faEllipsis} />
        </h2>
        <h2 className={classNames("footer-down-icon", { close })} onClick={onClickDownIcon}>
          {close ? (
            <FontAwesomeIcon icon={faArrowAltCircleUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowCircleDown} />
          )}
        </h2>
      </div>
    </footer>
  );
};

export { Footer };
