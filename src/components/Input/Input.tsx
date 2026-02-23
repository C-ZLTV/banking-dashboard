import "./Input.scss";

type InputProps = {
  id: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  label?: string;
  size?: number;
  maxLength?: number;
};

function Input({
  id,
  disabled = false,
  placeholder,
  defaultValue,
  value,
  required = false,
  label,
  maxLength = 50,
  size = 25,
}: InputProps) {
  console.log(defaultValue, value);
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="text"
        id={id}
        name={id}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        minLength={maxLength}
        maxLength={maxLength}
        size={size}
      />
    </>
  );
}

export default Input;
