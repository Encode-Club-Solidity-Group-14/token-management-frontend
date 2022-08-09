import ProfileSummary from "./Profile-Summary";
import { OverviewSection } from "./styles";
import TokenOverview from "./Token-overview";

const Summary = (props) => {
  return (
    <OverviewSection>
      <TokenOverview
        price={`$200`}
        marketCap={`$ 3000M`}
        totalSupply={`200K`}
        title="Token Overview"
        holders={`$300,000M`}
      />
      <ProfileSummary
        contract={props.tokenAddress}
        title="Profile Summary"
        website={"cliet_input"}
        support={"trixie@support.com"}
      />
    </OverviewSection>
  );
};

export default Summary;
