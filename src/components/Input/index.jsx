import { InputWrapper } from "./styles";

const InputComponent = ({
  type,
  label,
  value,
  labelName,
  placeholder,
  tokenManager,
}) => {
  return tokenManager ? (
    <InputWrapper tokenManager>
      <input
        type={type}
        id={label}
        name={label}
        value={value}
        placeholder={placeholder}
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
      />
    </InputWrapper>
  );
};

export default InputComponent;
