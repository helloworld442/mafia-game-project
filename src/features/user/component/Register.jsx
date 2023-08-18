import "./Register.scss";
import { AuthInput, Button } from "../../ui";
import HeaderLogo from "../../../assets/headerlogo.webp";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ email: "", nickname: "", password: "" });
  const [errors, setErrors] = useState({ email: "", nickname: "", password: "" });

  const validateNickname = (nickname) => {
    const nicknameRegex = /^[a-zA-Z0-9_-]+$/;
    if (nickname.trim() === "") return "유저 이름을 입력해주세요";
    if (!nicknameRegex.test(nickname)) return "유저 이름의 형식을 지켜주세요";
    if (nickname.length > 15) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    if (nickname.length < 5) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") return "이메일를 입력해주세요";
    if (!emailRegex.test(email)) return "이메일의 형식을 지켜주세요";
    if (email.length > 30) return "이메일의 길이는 (10~30)자로 맞춰주세요";
    if (email.length < 10) return "이메일의 길이는 (10~30)자로 맞춰주세요";
    return "";
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
    if (password.trim() === "") return "비밀번호을 입력해주세요";
    if (!passwordRegex.test(password)) return "비밀번호 형식을 지켜주세요";
    if (password.length > 15) return "비밀번호의 길이는 (5~15)자로 맞춰주세요";
    if (password.length < 5) return "비밀번호의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onSubmitInput = (e) => {
    e.preventDefault();
    const nicknameError = validateNickname(form.nickname);
    const passwordError = validatePassword(form.password);
    const emailError = validateEmail(form.email);

    if (nicknameError || passwordError || emailError) {
      setErrors({
        email: emailError,
        nickname: nicknameError,
        password: passwordError,
      });
      return;
    }
  };

  return (
    <form id="register-form" onSubmit={onSubmitInput}>
      {/* 회원가입 폼 로고 */}
      <img src={HeaderLogo} alt="Mafia" id="register-logo" />

      {/* 회원가입 폼 인풋 창 */}
      <AuthInput
        label="nickname"
        type="text"
        name="nickname"
        value={form.nickname}
        error={errors.nickname}
        onChange={onChangeInput}
      />
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

      {/* 회원가입 폼 버튼 */}
      <Button size="large" fullWidth primary>
        SIGN UP
      </Button>

      {/* 회원가입 폼 다른 곳 연결 링크  */}
      <Link to="/signin" id="register-footer">
        로그인 페이지
      </Link>
    </form>
  );
};

export { Register };
