import Button from "../../components/ButtonComponent/Button";
import InputComponent from "../../components/Input";
import Navigation from "../../components/Navigation";
import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer, NavWrapper } from "../../themes/container";
import { ManagerMain, TokenManagerForm, OverviewSection } from "./styles";
import { useMoralis } from "react-moralis"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ERC20_ABI } from "../../abis/constants"
import { Contract, ethers } from "ethers";

const TokenManager = () => {
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

  const [tokenAddress, setTokenAddress] = useState("")
  const [userTokenList, setUserTokenList] = useState([])
  const [event, setEvent] = useState({
    transferAmount: 0
  })

  useEffect(() => {
    if (user) {
      const listTokens = user.attributes.tokens?.attributes?.ERC20
      console.log(listTokens)
      setUserTokenList(listTokens)
      const token = listTokens[0]
      console.log(listTokens)
      if (token) {
        setTokenAddress(token)
      }
    }
  }, [user])

  const submit = async () => {
    await Moralis.enableWeb3();
    console.log(event.transferAmount)
    let provider
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!")
      provider = new ethers.providers.Web3Provider(Moralis.provider)
    }

    const sendOptions = {
      contractAddress: tokenAddress,
      functionName: "transfer",
      abi: ERC20_ABI,
      params: {
        from: user?.get("ethAddress"),
        to: "0x531d57798205714B688cCEA0b5D99427c1B184F1",
        amount: event.transferAmount
      },
    }

    const transaction = await Moralis.executeFunction(sendOptions);
    console.log(`Transaction Hash: ${transaction.hash}`)
    const result = await transaction.wait();
    alert('Transfer Done');

  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setEvent({ ...event, [name]: value })
  }

  return (
    <MainContainer>
      <Summary />
      <ManagerMain>
        <h3 className="bold color-primary">Token Manager - {tokenAddress}</h3>
        <TokenManagerForm>
          <InputComponent
            tokenManager={"tokenManager"}
            type="text"
            label="transferAmount"
            value={event.transferAmount}
            onChange={onChangeHandler}
            placeholder="Transfer token to address"
          />
          <Button
            label={"Transfer"}
            onClick={submit}
            classnames={[" secondary-btn snapshot"]}
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
          <label>All user tokens:</label>
          {userTokenList.map((address) => <span> {address} </span>)}
        </TokenManagerForm>
      </ManagerMain>
    </MainContainer>
  );
};

export default TokenManager;
