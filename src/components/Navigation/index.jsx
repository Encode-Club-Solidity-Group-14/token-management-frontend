import React from "react";
import Logo from "../Logo/index.jsx";
import { NavigationWrapper, NavBtnLink } from "./styles";

const Navigation = ({ linkNames }) => {
  return (
    <NavigationWrapper>
      <Logo />
      <ul>
        {linkNames?.map((linkName, index) => (
          <li key={index}>
            <NavBtnLink
              exact="true"
              className={({ isActive }) => isActive && console.log(isActive)}
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
