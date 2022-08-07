import Navigation from "../Navigation";
import { ButtonWrapper } from "./styles";

const Button = ({ classnames, label, onClick, toolTip }) => {
  return (
    <>
      <ButtonWrapper className={classnames.join(" ")} data-tip data-for={toolTip} onClick={onClick}>{label}</ButtonWrapper>
    </>
  );
};

export default Button;
