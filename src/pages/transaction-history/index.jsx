import React from "react";
import Button from "../../components/ButtonComponent/Button";
import Navigation from "../../components/Navigation";
import CustomizedTables from "../../components/Table";
import {
  transactionHistoryHeaders,
  transactionHistoryRows,
} from "../../components/Table/transaction-data";
import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer, NavWrapper } from "../../themes/container";
import { ManagerMain } from "../token-manager/styles";

const TransactionHistory = () => {
  return (
    <MainContainer>
      {/* <NavWrapper>
        <Navigation
          linkNames={[
            { link: "Token Manager", to: "/token-manager" },
            { link: "Transaction History", to: "/transaction-history" },
            { link: "Holders", to: "/top-holders" },
            { link: "Analytics", to: "#" },
          ]}
        />
        <Button label={"Connect Wallet"} classnames={["secondary-btn"]} />
      </NavWrapper> */}
      <Summary />
      <ManagerMain>
        <h3 className="bold color-primary">Transaction History</h3>
        <CustomizedTables
          dataType="transaction-history"
          rows={transactionHistoryRows}
          tableHeaders={transactionHistoryHeaders}
        />
      </ManagerMain>
    </MainContainer>
  );
};

export default TransactionHistory;
