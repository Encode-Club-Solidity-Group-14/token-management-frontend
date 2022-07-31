import React from "react";
import Navigation from "../../components/Navigation";

import { HomepageWrapper } from "./styles";
import Button from "../../components/ButtonComponent/Button";
import Footer from "../../components/Footer";
import { MainContainer } from "../../themes/container";

const Homepage = () => {
  return (
    // <HomepageWrapper>
    <>
      <MainContainer>
        <Navigation
          linkNames={[
            { link: "About" },
            { link: "pricing" },
            { link: "Features" },
            { link: "Contact" },
          ]}
        />
      </MainContainer>
      <div className="center">
        <Button classnames={["connect-btn"]} label={"Connect Wallet"} />
      </div>
      {/* </HomepageWrapper> */}
    </>
  );
};

export default Homepage;
