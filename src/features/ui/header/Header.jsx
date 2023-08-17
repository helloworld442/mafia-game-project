import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import HeaderLogo from "../../../assets/headerlogo.png";

const Header = () => {
  const navigateTo = useNavigate();

  const goHomeButton = () => navigateTo("/");

  const goSettingButton = () => navigateTo("/setting");

  return (
    <header className="header-nav">
      <img src={HeaderLogo} alt="Mafia" className="header-logo" onClick={goHomeButton} />
      <span className="header-text" onClick={goSettingButton}>
        <SettingOutlined />
      </span>
    </header>
  );
};

export { Header };
