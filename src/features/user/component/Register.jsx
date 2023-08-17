import "./Register.scss";
import { Button, Input } from "../../ui";
import HeaderLogo from "../../../assets/headerlogo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form id="register-form">
      <img src={HeaderLogo} alt="Mafia" id="register-logo" />
      <Input label="nickname" type="text" name="nickname" />
      <Input label="email" type="text" name="email" />
      <Input label="password" type="password" name="password" />
      <Button size="large" fullWidth primary>
        SIGN UP
      </Button>
      <Link to="/signin" id="register-footer">
        로그인 페이지
      </Link>
    </form>
  );
};

export { Register };
