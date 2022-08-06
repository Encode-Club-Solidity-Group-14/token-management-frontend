import { BrowserRouter as Router, Routes, Route, useMatch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Button from "./components/ButtonComponent/Button";
import Homepage from "./pages/homepage";
import WalletGenerator from "./pages/wallet-generator";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { M, MainContainer, NavWrapper } from "./themes/container";
import TokenManager from "./pages/token-manager";
import TransactionHistory from "./pages/transaction-history";
import TopHoldersHistory from "./pages/holders-history";
import { ProtectedRoute } from "./ProtectedRoutes";
import React from "react";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routeMatch = useMatch("/");
  return (
        <>
          {!routeMatch && (
              <MainContainer>
                  <NavWrapper>
                      <Navigation
                          linkNames={[
                            { link: "Token Manager", to: "/token-manager" },
                            { link: "Transaction History", to: "/transaction-history" },
                            { link: "Holders", to: "/top-holders" },
                            { link: "Analytics", to: "#" },
                          ]}
                      />
                      <Button label={"Connect Wallet"} classnames={["secondary-btn"]} />
                  </NavWrapper>
              </MainContainer>
          )}
            <M>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/wallet"
                  element={
                    <ProtectedRoute>
                      <WalletGenerator />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/token-manager"
                  element={
                    <ProtectedRoute>
                      <TokenManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/transaction-history"
                  element={
                    <ProtectedRoute>
                      <TransactionHistory />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/top-holders"
                  element={
                    <ProtectedRoute>
                      <TopHoldersHistory />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              {/* <Footer/> */}
            </M>
        </>
  );
}
export default App;
