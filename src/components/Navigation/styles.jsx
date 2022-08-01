import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavigationWrapper = styled.nav`
font-family: 'Poppins';
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 68px;
  width: 100%;
  max-width:80vh;
  gap: 7rem;

  ul {
    display: none;
    @media screen and (min-width: 40rem) {
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
      width: 100%;
      gap:1.5rem;
      height: 100%;
      padding: 22px 21px;
    }
  }
`;
export const NavBtnLink = styled(Link)`
  line-height: 24px;
  font-weight: 400;
  font-size: 1.3rem;
  color: #1e1e1e;
  /* padding: 0 10px; */
`;
