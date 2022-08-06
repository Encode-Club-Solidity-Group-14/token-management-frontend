import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavigationWrapper = styled.nav`
font-family: 'Poppins';
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 78px;
  width: 100%;
  /* max-width:80vh; */
  gap: 6rem;

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
  width: 100%;
  color: #1e1e1e;
  /* padding: 0 10px; */
  &:active {
    font-weight: 700 !important;
  }
  &:hover {
    font-weight: 700 !important;
  }
`;

export const NavLogoLink = styled(NavBtnLink)`
display: flex;
gap: 0.3rem;
align-items: center;
justify-content: center;
`
