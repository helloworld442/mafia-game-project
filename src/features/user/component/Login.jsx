import "./Login.scss";
import { Button, Input } from "../../ui";
import HeaderLogo from "../../../assets/headerlogo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form id="login-form">
      <img src={HeaderLogo} alt="Mafia" id="login-logo" />
      <Input>
        <Input.Label label="email" />
        <Input.Value type="text" />
      </Input>
      <Input>
        <Input.Label label="password" />
        <Input.Value type="password" />
      </Input>
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
