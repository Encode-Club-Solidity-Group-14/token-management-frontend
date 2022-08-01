import { ProfileSummaryWrapper } from "./styles";

const ProfileSummary = ({ title, contract, website, socialProfiles, support }) => {
  return (
    <ProfileSummaryWrapper>
      <header>
        <h3 className="bold color-primary medium-font">{title}</h3>
      </header>
      <div className="profile-details">
        <p className="bold-medium">Contract: {contract}</p>
        <p className="bold-medium">Official Website: {website}</p>
        <p className="bold-medium">Social Profiles: {socialProfiles}</p>
        <p className="bold-medium">Support: {support}</p>
      </div>
    </ProfileSummaryWrapper>
  );
};

export default ProfileSummary;
