import "./Input.scss";

const Input = ({ label, type, name, value, error, onChange }) => {
  return (
    <div className="input-box">
      <label htmlFor={label} className="input-label">
        {label}
      </label>
      <input id={label} type={type} name={name} value={value} error={error} onChange={onChange} />
      <span className="input-error">{error}</span>
    </div>
  );
};

export { Input };
