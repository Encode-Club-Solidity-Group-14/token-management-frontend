import { TokenManagerForm, ButtonGroups } from './styles'
import logo from "../../assets/alien-reading-book-animation.gif"
import LoadingSpinner from "../../components/LoadingSpinner/index";
import InputComponent from '../../components/Input'
import Button from '../../components/ButtonComponent/Button'
import ReactTooltip from 'react-tooltip'
import { ERC20_ABI, ERC20_MINT_ABI } from "../../abis/constants"
import { useMoralis } from "react-moralis";
import { useState } from 'react'

const TokenManagerScripts = (props) => {
  const {user,Moralis} = useMoralis()

  const [isLoading, setIsLoading] = useState(false)

  // BalanceOf properties
  const [balanceOf, setBalanceOf] = useState({
    address: "",
    amount: ""
  })
  // Mint properties
  const [mint, setMint] = useState({
    recipientAddress: "",
    amount: ""
  })
  const [mintableAmount, setMintableAmount] = useState('')
  // Transfer properties
  const [transfer, setTransfer] = useState({
    recipientAddress: "",
    amount: ""
  })
  // Allowance Properties
  const [allowance, setAllowance] = useState({
    ownerAddress: "",
    spenderAddress: ""
  })
  // TransferFrom properties
  const [transferFrom, setTransferFrom] = useState({
    senderAddress: "",
    recipientAddress: "",
    amount: ""
  })
  // Approve properties
  const [approve, setApprove] = useState({
    spenderAddress: "",
    amount: ""
  })
  // Airdrop properties
  const [airdropAmount, setAirdropAmount] = useState('')

  const onTransferFromChangeHandler = (e) => {
    const { name, value } = e.target
    setTransferFrom({ ...transferFrom, [name]: value })
  }

  const onTransferChangeHandler = (e) => {
    const { name, value } = e.target
    setTransfer({ ...transfer, [name]: value })
  }

  const onApproveChangeHandler = (e) => {
    const { name, value } = e.target
    setApprove({ ...approve, [name]: value })
  }

  const onAllowanceChangeHandler = (e) => {
    const { name, value } = e.target
    setAllowance({ ...allowance, [name]: value })
  }

  const onBalanceChangeHandler = (e) => {
    const { name, value } = e.target
    setBalanceOf({ ...balanceOf, [name]: value })
  }

  const onMintChangeHandler = (e) => {
    const { name, value } = e.target
    setMint({ ...mint, [name]: value })
  }

  const submit = async () => {}

  const sendBalanceOf = async () => {
    console.log(balanceOf)
    setBalanceOf({ ...balanceOf, ["amount"]: "" })
    await Moralis.enableWeb3();
    const sendOptions = {
      contractAddress: props.token?.attributes?.address,
      functionName: "balanceOf",
      abi: ERC20_ABI,
      params: {
        account: balanceOf.address
      },
    }
    const balance = await Moralis.executeFunction(sendOptions);
    console.log(balance)
    setBalanceOf({ ...balanceOf, ["amount"]: balance })
  }
  
  const sendMint = async () => {
    setIsLoading(true)
    await Moralis.enableWeb3();
    const sendOptions = {
      contractAddress: props.token?.attributes?.address,
      functionName: "mint",
      abi: ERC20_MINT_ABI,
      params: {
        from: user?.get("ethAddress"),
        to: mint.recipientAddress,
        amount: mint.amount
      },
    }
    const transaction = await Moralis.executeFunction(sendOptions)
    .catch(
      (error) => {
        console.error(error)
        setIsLoading(false)
      },
    );
    console.log(`Transaction Hash: ${transaction.hash}`)
    const result = await transaction.wait();
    console.log(result)
    setIsLoading(false)
  }


  const sendTransfer = async () => {
    setIsLoading(true)
    console.log(transfer)
    await Moralis.enableWeb3();
    const sendOptions = {
      contractAddress: props.token?.attributes?.address,
      functionName: "transfer",
      abi: ERC20_ABI,
      params: {
        from: user?.get("ethAddress"),
        to: transfer.recipientAddress,
        amount: transfer.amount
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
    const result = await transaction.wait();
    console.log(result)
    setIsLoading(false)
  }

  return (
    <>
    {isLoading ? (
      <LoadingSpinner logo={logo}/>
    ) : (
    <TokenManagerForm>
      {/* row #1 */}
      <div className="row">
        <div className="column">
          <InputComponent
            type="text"
            label="address"
            labelName="BalanceOf"
            value={balanceOf.address}
            toolTip="BalanceOf"
            onChange={onBalanceChangeHandler}
            placeholder="Owner Address"
          />
          <ReactTooltip id="BalanceOf" place="top" effect="solid">
            Returns the account balance of another account address.
          </ReactTooltip>
          <Button
            label={'Query Balance'}
            onClick={sendBalanceOf}
            classnames={[' secondary-btn snapshot']}
          />
        {balanceOf.amount !== "" && `Balance: ${balanceOf.amount}`}
        </div>
        <div className="column">
          <InputComponent
            type="text"
            label="recipientAddress"
            labelName="Mintable"
            toolTip="Mintable"
            value={mint.recipientAddress}
            onChange={onMintChangeHandler}
            placeholder="Recipient Address"
          />
          <InputComponent
            tokenManager={'tokenManager'}
            type="number"
            label="amount"
            value={mint.amount}
            onChange={onMintChangeHandler}
            placeholder="Amount"
          />
          <ReactTooltip id="Mintable" place="top" effect="solid">
            Privileged accounts will be able to emit new tokens.
          </ReactTooltip>
          <Button
            label={'Increase Supply'}
            onClick={sendMint}
            classnames={[' secondary-btn snapshot']}
          />
        </div>
      </div>
      {/* row #2 */}
      <div className="row">
        <div className="column">
          <InputComponent
            type="text"
            label="recipientAddress"
            labelName="Transfer"
            toolTip="Transfer"
            value={transfer.recipientAddress}
            onChange={onTransferChangeHandler}
            placeholder="Recipient Address"
          />
          <ReactTooltip id="Transfer" place="top" effect="solid">
            Transfers _value amount of tokens to address _to, and MUST fire the Transfer event.
          </ReactTooltip>
          <InputComponent
            tokenManager={'tokenManager'}
            type="number"
            label="amount"
            value={transfer.amount}
            onChange={onTransferChangeHandler}
            placeholder="Amount"
          />
          <Button
            label={'Transfer'}
            onClick={sendTransfer}
            classnames={[' secondary-btn snapshot']}
          />
        </div>
        <div className="column">
          <InputComponent
            type="text"
            label="ownerAddress"
            labelName="Allowance"
            value={allowance.ownerAddress}
            toolTip="Allowance"
            onChange={onAllowanceChangeHandler}
            placeholder="Owner Address"
          />
          <ReactTooltip id="Allowance" place="top" effect="solid">
            Returns the amount which _spender is still allowed to withdraw from _owner.
          </ReactTooltip>
          <InputComponent
            tokenManager={'tokenManager'}
            type="text"
            label="spenderAddress"
            value={allowance.spenderAddress}
            onChange={onAllowanceChangeHandler}
            placeholder="Spender Address"
          />
          <Button
            label={'Allowance'}
            onClick={submit}
            classnames={[' secondary-btn snapshot']}
          />
        </div>
      </div>
      {/* row #3 */}
      <div className="row">
        <div className="column">
          <InputComponent
            type="text"
            label="senderAddress"
            labelName="TransferFrom"
            toolTip="TransferFrom"
            value={transferFrom.senderAddress}
            onChange={onTransferFromChangeHandler}
            placeholder="Owner Address"
          />
          <ReactTooltip id="TransferFrom" place="top" effect="solid">
            Transfers _value amount of tokens to address _to.
          </ReactTooltip>
          <InputComponent
            tokenManager={'tokenManager'}
            type="text"
            label="recipientAddress"
            value={transferFrom.recipientAddress}
            onChange={onTransferFromChangeHandler}
            placeholder="Recipient Address"
          />
          <InputComponent
            tokenManager={'tokenManager'}
            type="number"
            label="amount"
            value={transferFrom.amount}
            onChange={onTransferFromChangeHandler}
            placeholder="Amount"
          />
          <Button
            label={'TransferFrom'}
            onClick={submit}
            classnames={[' secondary-btn snapshot']}
          />
        </div>
        <div className="column">
          <InputComponent
            type="text"
            label="spenderAddress"
            labelName="Approve"
            value={approve.spenderAddress}
            toolTip="Approve"
            onChange={onApproveChangeHandler}
            placeholder="Spender Address"
          />
          <ReactTooltip id="Approve" place="top" effect="solid">
            Allows _spender to withdraw from your account multiple times, up to the _value amount.
          </ReactTooltip>
          <InputComponent
            tokenManager={'tokenManager'}
            type="number"
            label="amount"
            value={approve.amount}
            onChange={onApproveChangeHandler}
            placeholder="Amount"
          />
          <Button
            label={'Approve'}
            onClick={submit}
            classnames={[' secondary-btn snapshot']}
          />
        </div>
      </div>
      {/* row #4 */}
      <div className="row">
        <div className="column">
          <InputComponent
            type="number"
            label="Airdrop"
            labelName="Airdrop"
            toolTip="Airdrop"
            value={airdropAmount}
            onChange={(e) => setAirdropAmount(e.target.value)}
            placeholder="Number of Tokens"
          />
          <ReactTooltip id="Airdrop" place="top" effect="solid">
            Provide csv or json file with addresses to bulk send tokens to
          </ReactTooltip>
          <ButtonGroups>
            <Button
              label={'Choose File'}
              onClick={submit}
              classnames={[' secondary-btn snapshot']}
            />
            <Button
              label={'Airdrop'}
              onClick={submit}
              classnames={[' secondary-btn snapshot']}
            />
          </ButtonGroups>
        </div>
        <div className="column"></div>
      </div>

      <div className="snapshot-pause-btn">
        <Button
          label={'Take Snapshot'}
          classnames={[' secondary-btn snapshot']}
        />
        <Button
          label={' Emergency Pause'}
          classnames={[' secondary-btn emergency']}
        />
      </div>
    </TokenManagerForm>  
    )}
  </>
  )
}

export default TokenManagerScripts
