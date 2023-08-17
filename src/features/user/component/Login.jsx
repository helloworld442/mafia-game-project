import "./Login.scss";
import { Button, Input } from "../../ui";
import HeaderLogo from "../../../assets/headerlogo.png";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    if (email.trim() === "") return "이메일을 입력해주세요";
    return "";
  };

  const validatePassword = (password) => {
    if (password.trim() === "") return "비밀번호을 입력해주세요";
    return "";
  };

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onSubmitInput = (e) => {
    e.preventDefault();
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }
  };

  return (
    <form id="login-form" onSubmit={onSubmitInput}>
      <img src={HeaderLogo} alt="Mafia" id="login-logo" />
      <Input
        label="email"
        type="text"
        name="email"
        value={form.email}
        error={errors.email}
        onChange={onChangeInput}
      />
      <Input
        label="password"
        type="password"
        name="password"
        value={form.password}
        error={errors.password}
        onChange={onChangeInput}
      />
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
