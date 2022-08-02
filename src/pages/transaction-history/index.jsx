import React from "react";
import Button from "../../components/ButtonComponent/Button";
import Navigation from "../../components/Navigation";
import CustomizedTables from "../../components/Table";
import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer, NavWrapper } from "../../themes/container";
import { ManagerMain } from "../token-manager/styles";

const TransactionHistory = () => {
  return (
    <MainContainer>
      <NavWrapper>
        <Navigation
          linkNames={[
            { link: "Token Manager" },
            { link: "Transaction History" },
            { link: "Holders" },
            { link: "Analytics" },
          ]}
        />
        <Button label={"Connect Wallet"} classnames={["secondary-btn"]} />
      </NavWrapper>
      <Summary />
      <ManagerMain>
        <h3 className="bold color-primary">Token Manager</h3>
        <CustomizedTables/>
      </ManagerMain>
    </MainContainer>
  );
};

export default TransactionHistory;
