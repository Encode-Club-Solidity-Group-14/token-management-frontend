import React from "react";
import Navigation from "../../components/Navigation";

import { HomepageWrapper } from "./styles";
import Button from "../../components/ButtonComponent/Button";
import Footer from "../../components/Footer";
import { MainContainer } from "../../themes/container";
import {Link} from "react-router-dom"

const Homepage = () => {
  return (
    // <HomepageWrapper>
    <>
      <div className="center">
        <Link to="/wallet">
          <Button classnames={["connect-btn"]} label={"Connect Wallet"} />
        </Link>
      </div>
      {/* </HomepageWrapper> */}
    </>
  );
};

export default Homepage;
