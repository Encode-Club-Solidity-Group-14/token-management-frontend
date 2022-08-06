import { InputWrapper } from "./styles";

const InputComponent = ({
  type,
  label,
  value,
  labelName,
  placeholder,
  tokenManager,
  onChange
}) => {
  return tokenManager ? (
    <InputWrapper tokenManager>
      <input
        type={type}
        id={label}
        name={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  ) : (
    <InputWrapper>
      <label htmlFor={label}>{labelName}</label>
      <input
        type={type}
        id={label}
        name={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default InputComponent;
