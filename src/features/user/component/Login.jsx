import "./Login.scss";
import { Button, Input } from "../../ui";
import HeaderLogo from "../../../assets/headerlogo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form id="login-form">
      <img src={HeaderLogo} alt="Mafia" id="login-logo" />
      <Input label="email" type="text" name="email" />
      <Input label="password" type="password" name="password" />
      <Button size="large" fullWidth primary>
        SIGN IN
      </Button>
      <Link to="/signup" id="login-footer">
        회원가입 페이지
      </Link>
    </form>
  );
};

export { Login };
