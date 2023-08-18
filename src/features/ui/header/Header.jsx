import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderLogo from "../../../assets/headerlogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header-nav">
      {/* 헤더 홈으로 가는 링크 아이콘*/}
      <Link to="/">
        <img src={HeaderLogo} alt="Mafia" className="header-logo" />
      </Link>
      <Link to="/write">
        <span className="header-write-link">Add</span>
      </Link>
    </header>
  );
};

const WriteHeader = () => {
  return (
    <header className="header-nav">
      <Link to="/">
        <span className="header-rollback-icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      </Link>
    </header>
  );
};

export { Header, WriteHeader };
