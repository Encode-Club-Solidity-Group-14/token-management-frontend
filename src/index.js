import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './themes/globalStyles'
// import {Provider} from "react-redux";
// import { ThemeProvider } from 'styled-components';
// import Theme from './theme/theme'
// import { useForm } from "react-hook-form";

// import "./index.css";

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// function App() {
//   const { register, handleSubmit, reset } = useForm();
//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>ERC20 Token Generator</h1>

//       <label htmlFor="tokeName">Token Name</label>
//       <input placeholder="EncodeToken" {...register("tokenName")} />

//       <label htmlFor="tokenSymbol">Token Symbol</label>
//       <input placeholder="ENC" {...register("tokenSymbol")} />

//       <label htmlFor="totalSupply">Total Supply</label>
//       <input placeholder="10000" {...register("totalSupply")} />

//       <label>Increase Token Supply</label>
//       <h2>Privileged accounts will be able to create more supply.</h2>
//       <select
//         name="tokenIncrease"
//         {...register("tokenIncrease", { required: true })}
//       >
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <label>Decrease Token Supply</label>
//       <h2>Token holders will be able to destroy their tokens.</h2>
//       <select
//         name="tokenDecrease"
//         {...register("tokenDecrease", { required: true })}
//       >
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <label>Emeregency Pause</label>
//       <h2>
//         Privileged accounts will be able to pause the functionality marked as
//         whenNotPaused. Useful for emergency response.
//       </h2>
//       <select name="pause" {...register("pause", { required: true })}>
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <label>Voting Option</label>
//       <h2>
//         Keeps track of historical balances for voting in on-chain governance,
//         with a way to delegate one's voting power to a trusted account.
//       </h2>
//       <select name="voting" {...register("voting", { required: true })}>
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <label>Flash Loans</label>
//       <h2>
//         Built-in flash loans. Lend tokens without requiring collateral as long
//         as they're returned in the same transaction.
//       </h2>
//       <select name="flashLoans" {...register("flashLoans", { required: true })}>
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <label>Snapshot</label>
//       <h2>
//         Privileged accounts will be able to store snapshots of balances that can
//         be retrieved later. For on-chain voting, the Votes option is preferable.
//       </h2>
//       <select name="snapshot" {...register("snapshot", { required: true })}>
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <label>Ownable</label>
//       <h2>
//         Simple mechanism with a single account authorized for all privileged
//         actions.
//       </h2>
//       <select name="ownable" {...register("ownable", { required: true })}>
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <label>Roles</label>
//       <h2>
//         Flexible mechanism with a separate role for each privileged action. A
//         role can have many authorized accounts.
//       </h2>
//       <select name="roles" {...register("roles", { required: true })}>
//         <option value="Yes">Yes</option>
//         <option value="No">No</option>
//       </select>

//       <input type="submit" />
//     </form>
//   );
// }
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <ThemeProvider theme={Theme}> */}
    <GlobalStyle />
    <Router>
        <App />
    </Router>
    {/* </ThemeProvider> */}
    {/* </Provider> */}
  </React.StrictMode>,rootElement
);


reportWebVitals();
