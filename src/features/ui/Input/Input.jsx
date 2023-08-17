import "./Input.scss";

const Input = ({ children }) => {
  return <div className="input-box">{children}</div>;
};

const InputLabel = ({ label }) => {
  return (
    <label htmlFor="input-value" className="input-label">
      {label}
    </label>
  );
};

const InputValue = ({ type, value, onChange }) => {
  return <input id="input-value" type={type} value={value} onChange={onChange} />;
};

Input.Label = InputLabel;
Input.Value = InputValue;

export { Input };
