import "./Login.scss";
import { Input } from "../../ui";

const Login = () => {
  return (
    <form id="login-form">
      <Input>
        <Input.Label label="email" />
        <Input.Value type="text" />
      </Input>
      <Input>
        <Input.Label label="password" />
        <Input.Value type="password" />
      </Input>
    </form>
  );
};

export { Login };
