import InputComponent from "../../components/Input";
import Navigation from "../../components/Navigation";
import { FormWrapper, Main, ButtonGroups } from "./styles";
import { MainContainer } from "../../themes/container";
import Button from "../../components/ButtonComponent/Button";
import {Link} from "react-router-dom";
import { Contract, ethers } from "ethers";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/index";

import {
  tokenFactoryABI,
  tokenFactoryAddress,
  ERC20_ADDRESS,
  DAI_ROPSTEN_ADDRES,
  ERC20_ABI,
} from "../../abis/constants"

const TokenGenerator = (props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [tokenDetails, setTokenDetails] = useState({
    name: "",
    symbol: "",
    supply: 0,
  })

  const navigate = useNavigate()

  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    Moralis,
    provider,
  } = useMoralis()

  useEffect(() => {
    props.loadUserAddress()
  }, [user])

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setTokenDetails({ ...tokenDetails, [name]: value })
  }

  const clone = async () => {
    setIsLoading(true)
    await Moralis.enableWeb3()
    console.log(user)
    console.log(tokenDetails)
    console.log(user.attributes.ethAddress)
    let provider
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!")
      provider = new ethers.providers.Web3Provider(Moralis.provider)
    }
    console.log("Deploying via moralis...")
    const sendOptions = {
      contractAddress: tokenFactoryAddress,
      functionName: "createERC20",
      abi: tokenFactoryABI,
      params: {
        libraryAddress_: ERC20_ADDRESS,
        name_: tokenDetails.name,
        symbol_: tokenDetails.symbol,
        decimals_: 18,
        totalSupply_: tokenDetails.supply,
      },
    }

    const transaction = await Moralis.executeFunction(sendOptions);
    console.log(`Transaction Hash: ${transaction.hash}`)
    const result = await transaction.wait();
    const data = result.events[0].args.newTokenAddress
    console.log(`ERC20 cloned! address at ${data}`);
    if (user.attributes.tokens === undefined) {
      console.log("create first token")
      const BigObject = Moralis.Object.extend("BigObject")
      const bigObject = new BigObject()
      const tokens = [data]
      bigObject.set("ERC20", tokens)
      bigObject.save()
      user.set("tokens", bigObject)
    } else {
      const userTokens = user.attributes.tokens;
      console.log("updating bigObject")
      console.log(userTokens)
      const tokens = userTokens.attributes.ERC20
      tokens.push(data)
      userTokens.set("ERC20", tokens)
      userTokens.save()
      console.log("updated")
      console.log(userTokens)
      //userTokens.push(data)
    }
     user.save()
     setIsLoading(false);
     navigate("/token-manager")
    
    //  const tokenFactory = new ethers.Contract(
    //   tokenFactoryAddress,
    //   tokenFactoryABI,
    //   provider,
    // )
    //there is a bug on ethers subcription - we're getting past event instead of new one
    // bug will be fixed in version 5.7.0 
    // tokenFactory.once('TokenCreated', (data) => {
    //   console.log(`ERC20 cloned! address at ${data}`)
    // })
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <MainContainer>
          {/* <Navigation /> */}
          <p className={"color-primary bold"}>ERC 20 Token Generator</p>
          <Main>
            <FormWrapper>
              <InputComponent
                type={"text"}
                value={tokenDetails.name}
                onChange={onChangeHandler}
                labelName={"Token Name"}
                label={"name"}
                placeholder={"Encode Token"}
              />
              <InputComponent
                type={"text"}
                value={tokenDetails.symbol}
                onChange={onChangeHandler}
                labelName={"Token Symbol"}
                label={"symbol"}
                placeholder={"ENC"}
              />
              <InputComponent
                type={"number"}
                value={tokenDetails.supply}
                onChange={onChangeHandler}
                labelName={"Token Supply"}
                label={"supply"}
                placeholder={1000}
              />
            </FormWrapper>
            <ButtonGroups>
              <Button classnames={["secondary-btn", "selected-btn"]} label={"Simple"} />
              <Button classnames={["secondary-btn"]} label={"Mintable"} />
              <Button classnames={["secondary-btn"]} label={"Burnable"} />
              <Button classnames={["secondary-btn"]} label={"Air Drop"} />
              <Button classnames={["secondary-btn", "disabled-btn"]} label={"Pause Token"} />
              <Button classnames={["secondary-btn", "disabled-btn"]} label={"Voting Option"} />
              <Button classnames={["secondary-btn", "disabled-btn"]} label={"Flash Loans"} />
              <Button classnames={["secondary-btn", "disabled-btn"]} label={"Snapshots"} />
              <Button classnames={["secondary-btn", "disabled-btn"]} label={"Ownables"} />
              <Button classnames={["secondary-btn", "disabled-btn"]} label={"Roles"} />
            </ButtonGroups>
            <Button
              classnames={["submit-btn"]}
              onClick={clone}
              label={"Submit"}
            />
          </Main>
        </MainContainer>
      )}
      {/* <Footer/> */}
    </>
  );
};

export default TokenGenerator;
