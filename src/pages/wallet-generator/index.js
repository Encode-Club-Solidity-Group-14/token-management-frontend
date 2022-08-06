import InputComponent from "../../components/Input";
import Navigation from "../../components/Navigation";
import { FormWrapper, Main, ButtonGroups } from "./styles";
import { MainContainer } from "../../themes/container";
import Button from "../../components/ButtonComponent/Button";
import {Link} from "react-router-dom"

const WalletGenerator = () => {
  return (
    <>
      <MainContainer>
        {/* <Navigation /> */}
        <p className={"color-primary bold"}>ERC 20 Token Generator</p>
        <Main>
          <FormWrapper>
            <InputComponent
              type={"text"}
              value={""}
              labelName={"Token Name"}
              label={"TokenName"}
              placeholder={"Encode Token"}
            />
            <InputComponent
              type={"text"}
              value={""}
              labelName={"Token Symbol"}
              label={"TokenSymbol"}
              placeholder={"ENC"}
            />
            <InputComponent
              type={"number"}
              value={""}
              labelName={"Token Supply"}
              label={"TokenSupply"}
              placeholder={1000}
            />
          </FormWrapper>
          <ButtonGroups>
            <Button classnames={["secondary-btn"]} label={"Increase Supply"} />
            <Button classnames={["secondary-btn"]} label={"Decrease Supply"} />
            <Button classnames={["secondary-btn"]} label={"Pause Token"} />
            <Button classnames={["secondary-btn"]} label={"Voting Option"} />
            <Button classnames={["secondary-btn"]} label={"Flash Loans"} />
            <Button classnames={["secondary-btn"]} label={"Snapshots"} />
            <Button classnames={["secondary-btn"]} label={"Ownables"} />
            <Button classnames={["secondary-btn"]} label={"Roles"} />
          </ButtonGroups>
          <Link to="/token-manager">
            <Button classnames={["submit-btn"]} label={"Submit"} />
          </Link>
        </Main>
      </MainContainer>
      {/* <Footer/> */}
    </>
  );
};

export default WalletGenerator;
