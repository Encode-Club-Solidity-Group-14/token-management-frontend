import footerImg from "../../assets/footer.svg";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
    <img src={footerImg} alt="footer image" />
  </FooterWrapper>
  )
}

export default Footer