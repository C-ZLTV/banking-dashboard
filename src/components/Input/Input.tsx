import "./Input.scss";
import type { ReactNode } from "react";

type InputSize = "small" | "middle" | "large";
type InputStatus = "error" | "warning" | "";

type InputProps = {
  id: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  inputSize?: InputSize;
  maxLength?: number;
  minLength?: number;
  status?: InputStatus;
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
};

function Input({
  id,
  disabled = false,
  placeholder,
  defaultValue,
  value,
  onChange,
  required = false,
  label,
  maxLength = 50,
  minLength = 1,
  inputSize = "middle",
  status = "",
  prefix,
  className = "",
}: InputProps) {
  const wrapperClasses = [
    "input-wrapper",
    `input-wrapper--${inputSize}`,
    status ? `input-wrapper--${status}` : "",
    disabled ? "input-wrapper--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-container">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <div className={wrapperClasses}>
        {prefix && <span className="input-prefix">{prefix}</span>}
        <input
          type="text"
          id={id}
          name={id}
          disabled={disabled}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          className="input-field"
        />
      </div>
    </div>
  );
}

export default Input;
