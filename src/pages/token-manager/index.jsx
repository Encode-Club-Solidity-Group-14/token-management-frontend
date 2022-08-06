import Button from "../../components/ButtonComponent/Button";
import InputComponent from "../../components/Input";
import Navigation from "../../components/Navigation";
import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer, NavWrapper } from "../../themes/container";
import { ManagerMain, TokenManagerForm, OverviewSection } from "./styles";

const TokenManager = () => {
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
        <h3 className="bold color-primary">Token Manager</h3>
        <TokenManagerForm>
          <InputComponent
            tokenManager={"tokenManager"}
            type="text"
            label="transfer"
            value={""}
            placeholder="Transfer token to address"
          />
          <InputComponent
            tokenManager={"tokenManager"}
            type="text"
            label="query-balance"
            value={""}
            placeholder="Query holder balance by address"
          />
          <InputComponent
            tokenManager={"tokenManager"}
            type="text"
            label="increase-supply"
            value={""}
            placeholder="Increase Supply"
          />
          <InputComponent
            tokenManager={"tokenManager"}
            type="text"
            label="decrease-supply"
            value={""}
            placeholder="Decrease Supply"
          />
          <div className="snapshot-pause-btn">
            <Button
              label={"Take Snapshot"}
              classnames={[" secondary-btn snapshot"]}
            />
            <Button
              label={" Emergency Pause"}
              classnames={[" secondary-btn emergency"]}
            />
          </div>
        </TokenManagerForm>
      </ManagerMain>
    </MainContainer>
  );
};

export default TokenManager;
