import { useState } from "react";
import './styles.css'

const Scripts = () => {
    const [balanceOf, setBalanceOf] = useState('');
    const [transferRecipientAddress, setTransferRecipientAddress] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [transferFromSenderAddress, setTransferFromSenderAddress] = useState('');
    const [transferFromRecipientAddress, setTransferFromRecipientAddress] = useState('');
    const [transferFromAmount, setTransferFromAmount] = useState('');
    const [airdropAmount, setAirdropAmount] = useState('');
    const [mintableAmount, setMintableAmount] = useState('');
    const [allowanceOwnerAddress, setAllowanceOwnerAddress] = useState('');
    const [allowanceSpenderAddress, setAllowanceSpenderAddress] = useState('');
    const [approveSpenderAddress, setApproveSpenderAddress] = useState('');
    const [approveAmount, setApproveAmount] = useState('');

  return (
    <div className="create">
        <div className="title">BalanceOf</div>
        <div className="description">Returns the account balance of another account address.</div>
        <input 
          type="text" 
          placeholder="Owner Address"
          required 
          value={balanceOf}
          onChange={(e) => setBalanceOf(e.target.value)}
        />
        <button>Query Balance</button>

        <div className="title">Transfer</div>
        <div className="description">Transfers _value amount of tokens to address _to, and MUST fire the Transfer event.</div>
        <input 
          type="text" 
          placeholder="Recipient Address"
          required 
          value={transferRecipientAddress}
          onChange={(e) => setTransferRecipientAddress(e.target.value)}
        />        <input 
        type="number" 
        placeholder="Amount"
        required 
        value={transferAmount}
        onChange={(e) => setTransferAmount(e.target.value)}
      />
        <button>Transfer</button>

        <div className="title">TransferFrom</div>
        <div className="description">Transfers _value amount of tokens to address _to.</div>
        <input 
          type="text" 
          placeholder="Sender Address"
          required 
          value={transferFromSenderAddress}
          onChange={(e) => setTransferFromSenderAddress(e.target.value)}
        />        
        <input 
        type="text" 
        placeholder="Recipient Address"
        required 
        value={transferFromRecipientAddress}
        onChange={(e) => setTransferFromRecipientAddress(e.target.value)}
      />
        <input 
        type="number" 
        placeholder="Amount"
        required 
        value={transferFromAmount}
        onChange={(e) => setTransferFromAmount(e.target.value)}
      />
        <button>TransferFrom</button>

        <div className="title">Airdrop</div>
        <div className="description">Provide csv or json file with addresses to bulk send tokens to</div>
        <input 
          type="number" 
          placeholder="Number of Tokens"
          required 
          value={airdropAmount}
          onChange={(e) => setAirdropAmount(e.target.value)}
        />
        <button>Choose File</button>
        <button>Airdrop</button>

        <div className="title">Mintable</div>
        <div className="description">Privileged accounts will be able to emit new tokens.</div>
        <input 
          type="number" 
          placeholder="Amount"
          required 
          value={mintableAmount}
          onChange={(e) => setMintableAmount(e.target.value)}
        />
        <button>Increase Supply</button>

        <div className="title">Allowance</div>
        <div className="description">Returns the amount which _spender is still allowed to withdraw from _owner.</div>
        <input 
          type="text" 
          placeholder="Owner Address"
          required 
          value={allowanceOwnerAddress}
          onChange={(e) => setAllowanceOwnerAddress(e.target.value)}
        />        <input 
        type="text" 
        placeholder="Spender Address"
        required 
        value={allowanceSpenderAddress}
        onChange={(e) => setAllowanceSpenderAddress(e.target.value)}
      />
        <button>Allowance</button>

        <div className="title">Approve</div>
        <div className="description">Allows _spender to withdraw from your account multiple times, up to the _value amount.</div>
        <input 
          type="text" 
          placeholder="Spender Address"
          required 
          value={approveSpenderAddress}
          onChange={(e) => setApproveSpenderAddress(e.target.value)}
        />        <input 
        type="number" 
        placeholder="Amount"
        required 
        value={approveAmount}
        onChange={(e) => setApproveAmount(e.target.value)}
      />
        <button>Approve</button>

    <div className="title">Emergency Pause</div>
      <button>Pause Token Activity</button>
    </div>
  );
}
 
export default Scripts;