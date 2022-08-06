import React from "react";
import Button from "../../components/ButtonComponent/Button";
import Navigation from "../../components/Navigation";
import CustomizedTables from "../../components/Table";
import {
  holdersHeaders,
  holdersRows,
} from "../../components/Table/holders-data";
import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer, NavWrapper } from "../../themes/container";
import { ManagerMain } from "../token-manager/styles";

const TopHoldersHistory = () => {
  return (
    <MainContainer>
      <Summary />
      <ManagerMain>
        <h3 className="bold color-primary">Top Holders</h3>
        <CustomizedTables
          // dataType="transaction-history"
          rows={holdersRows}
          tableHeaders={holdersHeaders}
        />
      </ManagerMain>
    </MainContainer>
  );
};

export default TopHoldersHistory;
