import React from "react";
import Logo from "../Logo.js/index.jsx";
import { NavigationWrapper, NavBtnLink } from "./styles";

const Navigation = ({ linkNames }) => {
  return (
    <NavigationWrapper>
      <NavBtnLink to="#">
        <Logo />
      </NavBtnLink>
      <ul>
        {linkNames?.map((linkName, index) => (
          <li>
            <NavBtnLink className={({isActive}) => isActive && bold} to={"/manager"}>{linkName.link}</NavBtnLink>
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
