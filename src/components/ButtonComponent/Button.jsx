import Navigation from "../Navigation";
import { ButtonWrapper } from "./styles";

const Button = ({ classnames, label }) => {
  return (
    <>
      <ButtonWrapper className={classnames.join(" ")}>{label}</ButtonWrapper>
    </>
  );
};

export default Button;
