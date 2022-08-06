import Navigation from "../Navigation";
import { ButtonWrapper } from "./styles";

const Button = ({ classnames, label, onClick }) => {
  return (
    <>
      <ButtonWrapper className={classnames.join(" ")} onClick={onClick}>{label}</ButtonWrapper>
    </>
  );
};

export default Button;
