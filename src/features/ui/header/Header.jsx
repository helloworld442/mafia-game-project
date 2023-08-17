import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, LeftOutlined } from "@ant-design/icons";

const Header = () => {
  const navigateTo = useNavigate();

  const goBackButton = () => navigateTo(-1);

  const goHomeButton = () => navigateTo("/");

  return (
    <header className="header-nav">
      <span className="header-text" onClick={goBackButton}>
        <LeftOutlined />
      </span>
      <span className="header-text" onClick={goHomeButton}>
        <HomeOutlined />
      </span>
    </header>
  );
};

export { Header };
