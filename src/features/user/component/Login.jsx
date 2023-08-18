import "./Login.scss";
import { AuthInput, Button } from "../../ui";
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
      {/* 로그인 폼 로고 */}
      <img src={HeaderLogo} alt="Mafia" id="login-logo" />

      {/* 로그인 폼 인풋 창 */}
      <AuthInput
        label="email"
        type="text"
        name="email"
        value={form.email}
        error={errors.email}
        onChange={onChangeInput}
      />
      <AuthInput
        label="password"
        type="password"
        name="password"
        value={form.password}
        error={errors.password}
        onChange={onChangeInput}
      />

      {/* 로그인 폼 버튼 */}
      <Button size="large" fullWidth primary>
        SIGN IN
      </Button>

      {/* 로그인 폼 다른 곳 연결 링크 */}
      <Link to="/signup" id="login-footer">
        회원가입 페이지
      </Link>
    </form>
  );
};

export { Login };
