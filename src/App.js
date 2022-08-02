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
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
      <Router>
      <M>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wallet" element={<WalletGenerator />} />
          <Route path="/manager" element={<TokenManager />} />
          <Route path="/history" element={<TransactionHistory />} />
        </Routes>
        {/* <Footer/> */}
        </M>
      </Router>
  );
}
export default App;
