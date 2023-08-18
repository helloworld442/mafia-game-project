import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderLogo from "../../../assets/headerlogo.webp";

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

export { Header };
