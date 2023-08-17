import "./Input.scss";

const Input = ({ children }) => {
  return <div className="input-box">{children}</div>;
};

const InputLabel = ({ label }) => {
  return <label className="input-label">{label}</label>;
};

const InputValue = ({ type, value, onChange }) => {
  return <input type={type} value={value} onChange={onChange} />;
};

Input.Label = InputLabel;
Input.Value = InputValue;

export default Input;
