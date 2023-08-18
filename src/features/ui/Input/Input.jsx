import "./Input.scss";
import classNames from "classnames";

const Input = ({ children }) => {
  return <div className="input-box">{children}</div>;
};

const InputLabel = ({ label }) => {
  return (
    <label htmlFor={label} className="input-label">
      {label}
    </label>
  );
};

const InputValue = ({ label, type, name, value, error, onChange }) => {
  return (
    <input
      className={classNames("input", { error })}
      id={label}
      type={type}
      name={name}
      value={value}
      error={error}
      onChange={onChange}
    />
  );
};

const InputError = ({ error }) => {
  return <span className="input-error">{error}</span>;
};

Input.Label = InputLabel;
Input.Value = InputValue;
Input.Error = InputError;

export default Input;
