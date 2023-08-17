import "./Login.scss";
import { Input } from "../../ui";

const Login = () => {
  return (
    <form id="login-form">
      <Input>
        <Input.Label />
        <Input.Value />
      </Input>
      <Input>
        <Input.Label />
        <Input.Value />
      </Input>
    </form>
  );
};

export { Login };
