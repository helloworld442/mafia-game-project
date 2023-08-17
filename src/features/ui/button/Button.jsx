import classNames from "classnames";

const Button = ({ children, size, fullWidth, primary, ...rest }) => {
  return <button className={classNames("button", { size, fullWidth, primary })} {...rest}></button>;
};

export { Button };
