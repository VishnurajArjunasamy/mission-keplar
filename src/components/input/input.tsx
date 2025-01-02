import { FC } from "react";
import classes from "./input.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface inputProps {
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  name?: string;
  isReadOnly?: boolean;
}

const Input: FC<inputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  name,
  defaultValue,
  isReadOnly
}) => {
  const isDark = useSelector((state: RootState) => state.sideBar.isDarkMode);
  const style = `${classes.input} ${isDark ? classes.dark : classes.light}`;
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      className={style}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      readOnly={isReadOnly}
    />
  );
};

export default Input;