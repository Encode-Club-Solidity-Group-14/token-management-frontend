import ProfileSummary from "./Profile-Summary";
import { OverviewSection } from "./styles";
import TokenOverview from "./Token-overview";

const Summary = (props) => {
  return (
    <OverviewSection>
      <TokenOverview
        price={`$200`}
        marketCap={`$ 3000M`}
        totalSupply={props?.totalSupply}
        symbol={props.token?.attributes?.symbol}
        title="Token Overview"
        holders={`$300,000M`}
      />
      <ProfileSummary
        contract={props.token?.attributes?.address}
        title="Profile Summary"
        website={"cliet_input"}
        support={"trixie@support.com"}
      />
    </OverviewSection>
  );
};

export default Summary;
