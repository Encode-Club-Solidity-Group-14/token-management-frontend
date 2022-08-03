import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Button from "./components/ButtonComponent/Button";
import Homepage from "./pages/homepage";
import WalletGenerator from "./pages/wallet-generator";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { M } from "./themes/container";
import TokenManager from "./pages/token-manager";
import TransactionHistory from "./pages/transaction-history";
import TopHoldersHistory from "./pages/holders-history";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
      <Router>
      <M>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wallet" element={<WalletGenerator />} />
          <Route path="/token-manager" element={<TokenManager />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/top-holders" element={<TopHoldersHistory />} />
        </Routes>
        {/* <Footer/> */}
        </M>
      </Router>
  );
}
export default App;
