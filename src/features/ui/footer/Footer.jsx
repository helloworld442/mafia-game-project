import "./Footer.scss";
import classNames from "classnames";
import { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, PlusOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const Footer = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    switch (pathname) {
      case "/":
        return setActive(0);
      case "/write":
        return setActive(1);
      case "/signin":
        return setActive(2);
      case "/signup":
        return setActive(2);
      case "/setting":
        return setActive(3);
    }
  }, [pathname]);

  return (
    <footer className="footer-nav">
      <Link to="/" className={classNames("footer-link", { active: active === 0 })}>
        <HomeOutlined />
      </Link>
      <Link to="/write" className={classNames("footer-link", { active: active === 1 })}>
        <PlusOutlined />
      </Link>
      <Link to="/signin" className={classNames("footer-link", { active: active === 2 })}>
        <UserOutlined />
      </Link>
      <Link to="/setting" className={classNames("footer-link", { active: active === 3 })}>
        <SettingOutlined />
      </Link>
    </footer>
  );
};

export { Footer };
