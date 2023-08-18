import { memo } from "react";
import Input from "./Input";

const WriteInput = memo(({ label, type, name, value, error, onChange }) => {
  return (
    <Input>
      <Input.Label label={label} />
      <Input.Value
        label={label}
        type={type}
        name={name}
        value={value}
        error={error}
        onChange={onChange}
      />
      <Input.Error error={error} />
    </Input>
  );
});

export { WriteInput };
