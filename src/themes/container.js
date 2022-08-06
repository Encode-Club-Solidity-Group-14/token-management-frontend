import styled from "styled-components";
import bg from "../assets/footer.svg";

export const MainContainer = styled.div`
  margin: 0 60px 10px;
  /* min-height: 80vh; */
`;
export const M = styled.div`
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  /* background-attachment: fixed; */
  background-position: center bottom;
  padding-bottom: 2rem;
`;

export const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .secondary-btn {
    width: 185px;
    height: 53px;
    border-radius: 2rem;
  }
`;
