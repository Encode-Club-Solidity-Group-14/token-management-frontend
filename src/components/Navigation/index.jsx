import React from "react";
import Logo from "../Logo.js/index.jsx";
import { NavigationWrapper, NavBtnLink } from "./styles";

const Navigation = ({ linkNames }) => {
  return (
    <NavigationWrapper>
      <Logo />
      <ul>
        {linkNames?.map((linkName, index) => (
          <li>
            <NavBtnLink
              exact
              className={({ isActive }) => isActive && console.log(isActive)}
              activeClassName={{Style: {fontWeight: '700'}}}
              to={`${linkName.to}`}
            >
              {linkName.link}
            </NavBtnLink>
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
