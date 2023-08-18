import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderLogo from "../../../assets/headerlogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header-nav">
      {/* 헤더 홈으로 가는 링크 아이콘*/}
      <Link to="/">
        <img src={HeaderLogo} alt="Mafia" className="header-logo" />
      </Link>

      {/* 헤더 설정으로 가는 링크 아이콘*/}
      <Link to="/setting" className="header-text">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Link>
    </header>
  );
};

export { Header };
