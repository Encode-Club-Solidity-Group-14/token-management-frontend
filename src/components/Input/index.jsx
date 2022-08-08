import { InputWrapper } from "./styles";

const InputComponent = ({
  type,
  label,
  value,
  labelName,
  placeholder,
  tokenManager,
  toolTip,
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
      <label data-tip data-for={toolTip} htmlFor={label}>{labelName}</label>
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
