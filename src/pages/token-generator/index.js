import InputComponent from "../../components/Input";
import logo from "../../assets/alien-going-to-space-emoji-animation.gif"
import { FormWrapper, Main, ButtonGroups } from "./styles";
import { MainContainer } from "../../themes/container";
import Button from "../../components/ButtonComponent/Button";
import { Link } from "react-router-dom";
import { Contract, ethers } from "ethers";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/index";
import Generator from "./token-generator"
import ReactTooltip from "react-tooltip"
import { tokenFactoryABI, tokenFactoryAddress } from "../../abis/constants"
import { findAddress } from "./token-generator"

const TokenGenerator = (props) => {
  const [isLoading, setIsLoading] = useState(false)

  const toWei = (num) => ethers.utils.parseEther(num.toString())

  const [tokenDetails, setTokenDetails] = useState({
    name: "",
    symbol: "",
    supply: 0,
  })

  const [tokenCharacteristc, setTokenCharacteristc] = useState({
    ERC20: false,
    ERC20Mint: false,
    ERC20Burn: false,
    ERC20AirDrop: false,
    ERC20Pausable: false,
    ERC20FlashMint: false,
    ERC20Snapshots: false,
    ERC20Ownable: false,
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

  const onTokenCharacteristcsHandler = (type) => {
    console.log(type)
    switch (type) {
      case "ERC20":
        const ERC20 = {
          ERC20: !tokenCharacteristc.ERC20,
          ERC20Mint: false,
          ERC20Burn: false,
          ERC20AirDrop: false,
          ERC20Pausable: false,
          ERC20FlashMint: false,
          ERC20Snapshots: false, 
          ERC20Ownable: tokenCharacteristc.ERC20Ownable
        }
        setTokenCharacteristc(ERC20)
        break
      case "ERC20Mint":
        const ERC20Mint = {
          ERC20: false,
          ERC20Mint: !tokenCharacteristc.ERC20Mint,
          ERC20Burn: false,
          ERC20AirDrop: false,
          ERC20Pausable: tokenCharacteristc.ERC20Pausable,
          ERC20FlashMint: false,
          ERC20Snapshots: false, 
          ERC20Ownable: !tokenCharacteristc.ERC20Mint
        }
        setTokenCharacteristc(ERC20Mint)
        break
      case "ERC20Burn":
        const ERC20Burn = {
          ERC20: false,
          ERC20Mint: false,
          ERC20Burn: !tokenCharacteristc.ERC20Burn,
          ERC20AirDrop: false,
          ERC20Pausable: false,
          ERC20FlashMint: false,
          ERC20Snapshots: false, 
          ERC20Ownable: false
        }
        setTokenCharacteristc(ERC20Burn)
        break
      case "ERC20AirDrop":
        const ERC20AirDrop = {
          ERC20: false,
          ERC20Mint: !tokenCharacteristc.ERC20AirDrop,
          ERC20Burn: !tokenCharacteristc.ERC20AirDrop,
          ERC20AirDrop: !tokenCharacteristc.ERC20AirDrop,
          ERC20Pausable: false,
          ERC20FlashMint: false,
          ERC20Snapshots: false, 
          ERC20Ownable: !tokenCharacteristc.ERC20AirDrop,
        }
        setTokenCharacteristc(ERC20AirDrop)
        break
      case "ERC20Pausable":
        const ERC20Pausable = {
          ERC20: false,
          ERC20Mint: tokenCharacteristc.ERC20Mint,
          ERC20Burn: tokenCharacteristc.ERC20Burn,
          ERC20AirDrop: false,
          ERC20Pausable: !tokenCharacteristc.ERC20Pausable,
          ERC20FlashMint: false,
          ERC20Snapshots: false, 
          ERC20Ownable: !tokenCharacteristc.ERC20Pausable
        }
        setTokenCharacteristc(ERC20Pausable)
        break
      case "ERC20FlashMint":
        const ERC20FlashMint = {
          ERC20: false,
          ERC20Mint: false,
          ERC20Burn: false,
          ERC20AirDrop: false,
          ERC20Pausable: false,
          ERC20FlashMint: !tokenCharacteristc.ERC20FlashMint,
          ERC20Snapshots: false, 
          ERC20Ownable: false
        }
        setTokenCharacteristc(ERC20FlashMint)
        break
      case "ERC20Snapshots":
        const ERC20Snapshots = {
          ERC20: tokenCharacteristc.ERC20,
          ERC20Mint: false,
          ERC20Burn: false,
          ERC20AirDrop: false,
          ERC20Pausable: false,
          ERC20FlashMint: false,
          ERC20Snapshots: !tokenCharacteristc.ERC20Snapshots, 
          ERC20Ownable: false
        }
        setTokenCharacteristc(ERC20Snapshots)
          break
      case "ERC20Ownable":
        const ERC20Ownable = {
          ERC20: tokenCharacteristc.ERC20,
          ERC20Mint: false,
          ERC20Burn: false,
          ERC20AirDrop: false,
          ERC20Pausable: false,
          ERC20FlashMint: false,
          ERC20Snapshots: false, 
          ERC20Ownable: !tokenCharacteristc.ERC20Ownable
        }
        setTokenCharacteristc(ERC20Ownable)
        break
      default:
      // code block
    }
  }

  const clone = async () => {
    setIsLoading(true)
    await Moralis.enableWeb3()
    console.log("Deploying via moralis...")
    const {address, type} = findAddress(tokenCharacteristc);
    const sendOptions = {
      contractAddress: tokenFactoryAddress,
      functionName: "createERC20",
      abi: tokenFactoryABI,
      params: {
        libraryAddress_: address,
        name_: tokenDetails.name,
        symbol_: tokenDetails.symbol,
        decimals_: 18,
        totalSupply_: toWei(tokenDetails.supply),
      },
    }
    const transaction = await Moralis.executeFunction(sendOptions)
    .catch(
      (error) => {
        console.error(error)
        setIsLoading(false)
      },
    )
    console.log(`Transaction Hash: ${transaction.hash}`)
    const result = await transaction.wait()
    console.log(result);
    let data = result.events[0].args.newTokenAddress
    if(data === undefined){
      data = result.events[1].args.newTokenAddress
    }
    console.log(`ERC20 cloned! address at ${data}`)
    if (data) {
      const ERC20 = Moralis.Object.extend("ERC20")
      const token = new ERC20()
      token.set("userAddress", user.attributes.ethAddress)
      token.set("name", tokenDetails.name)
      token.set("symbol", tokenDetails.symbol)
      token.set("address", data)
      token.set("type", type)
      token.save()
    }
    setIsLoading(false)
    navigate("/token-manager")
    //  const tokenFactory = new ethers.Contract(
    //   tokenFactoryAddress,
    //   tokenFactoryABI,
    //   provider,
    // )
    //there is a bug on ethers subcription - we"re getting past event instead of new one
    // bug will be fixed in version 5.7.0
    // tokenFactory.once("TokenCreated", (data) => {
    //   console.log(`ERC20 cloned! address at ${data}`)
    // })
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner logo={logo}/>
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
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20 && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20")}
                toolTip="ERC20"
                label={"Simple"}
              />
              <ReactTooltip id="ERC20" place="top" effect="solid">
                Simple ERC20 Token
              </ReactTooltip>
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20Mint && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20Mint")}
                toolTip="ERC20Mint"
                label={"Mintable"}
              />
              <ReactTooltip id="ERC20Mint" place="top" effect="solid">
                Privileged accounts will be able to create more supply.
              </ReactTooltip>
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20Burn && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20Burn")}
                toolTip="ERC20Burn"
                label={"Burnable"}
              />
              <ReactTooltip id="ERC20Burn" place="top" effect="solid">
                Token holders will be able to destroy their tokens.
              </ReactTooltip>
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20AirDrop && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20AirDrop")}
                toolTip="ERC20AirDrop"
                label={"Air Drop"}
              />
              <ReactTooltip id="ERC20AirDrop" place="top" effect="solid">
                Mintable and Burnable ERC20 token with function to Air Drop Token to addresses
              </ReactTooltip>
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20Pausable && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20Pausable")}
                toolTip="ERC20Pausable"
                label={"Pause Token"}
              />
              <ReactTooltip id="ERC20Pausable" place="top" effect="solid">
                Privileged accounts will be able to pause. Useful for emergency response.
              </ReactTooltip>
              <Button
                classnames={["secondary-btn", "disabled-btn"]}
                label={"Voting Option"}
              />
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20FlashMint && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20FlashMint")}
                toolTip="ERC20FlashMint"
                label={"Flash Loans"}
              />
              <ReactTooltip id="ERC20FlashMint" place="top" effect="solid">
                Built-in flash loans. Lend tokens without requiring collateral as long as they"re returned in the same transaction.
              </ReactTooltip>
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20Snapshots && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20Snapshots")}
                toolTip="ERC20Snapshots"
                label={"Snapshots"}
              />
              <ReactTooltip id="ERC20Snapshots" place="top" effect="solid">
                Privileged accounts will be able to store snapshots of balances that can be retrieved later.
                For on-chain voting, the Votes option is preferable.
              </ReactTooltip>
              <Button
                classnames={[
                  "secondary-btn",
                  `${tokenCharacteristc.ERC20Ownable && "selected-btn"}`,
                ]}
                onClick={() => onTokenCharacteristcsHandler("ERC20Ownable")}
                toolTip="ERC20Ownable"
                label={"Ownables"}
              />
              <ReactTooltip id="ERC20Ownable" place="top" effect="solid">
                Simple mechanism with a single account authorized for all privileged actions.
              </ReactTooltip>
              <Button
                classnames={["secondary-btn", "disabled-btn"]}
                label={"Roles"}
              />
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
  )
}

export default TokenGenerator
