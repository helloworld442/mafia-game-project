import "./Header.scss";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../../../assets/headerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigateTo = useNavigate();

  const goHomeButton = () => navigateTo("/");

  const goSettingButton = () => navigateTo("/setting");

  return (
    <header className="header-nav">
      <img src={HeaderLogo} alt="Mafia" className="header-logo" onClick={goHomeButton} />
      <span className="header-text" onClick={goSettingButton}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </span>
    </header>
  );
};

export { Header };
