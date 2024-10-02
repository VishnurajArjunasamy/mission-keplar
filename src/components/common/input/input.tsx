import React from "react";
import styles from "./input.module.scss";

interface InputIF extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  type,
  value,
  name,
  required,
  onChange,
}: InputIF) {
  return (
    <label className={styles["input-card"]}>
      <p>{label}</p>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}