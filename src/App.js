import { BrowserRouter as Router, Routes, Route, useMatch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Button from "./components/ButtonComponent/Button";
import Homepage from "./pages/homepage";
import TokenGenerator from "./pages/token-generator";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { M, MainContainer, NavWrapper } from "./themes/container";
import TokenManager from "./pages/token-manager";
import TransactionHistory from "./pages/transaction-history";
import TopHoldersHistory from "./pages/holders-history";
import { ProtectedRoute } from "./ProtectedRoutes";
import React from "react";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis";

function App() {
  const routeMatch = useMatch("/")

  const navigate = useNavigate()

  const {
    isAuthenticated,
    user,
    logout,
  } = useMoralis()

  const logOut = async () => {
    await logout()
    console.log('logged out')
    navigate('/')
  }

  const [userWallet, setUserWallet] = useState('')
  
  const loadUserAddress = async () => {
    if (isAuthenticated) {
      const addressConnected = user?.get('ethAddress')
      if (addressConnected) {
        const start = addressConnected.substring(0, 5)
        const end = addressConnected.substring(
          addressConnected.length - 4,
          addressConnected.length,
        )
        const truncatedAddres = start + '...' + end
        setUserWallet(truncatedAddres)
      }
    }
  }

  return (
    <>
      {!routeMatch && (
        <MainContainer>
          <NavWrapper>
            <Navigation
              linkNames={[
                { link: 'Token Manager', to: '/token-manager' },
                { link: 'Transaction History', to: '/transaction-history' },
                { link: 'Holders', to: '/top-holders' },
                { link: 'Analytics', to: '#' },
              ]}
            />
            <Button label={userWallet} classnames={['secondary-btn']} />
            <Button
              label={'Log Out'}
              onClick={logOut}
              classnames={['secondary-btn']}
            />
          </NavWrapper>
        </MainContainer>
      )}
      <M>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/token"
            element={
              <ProtectedRoute>
                <TokenGenerator loadUserAddress={loadUserAddress}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/token-manager"
            element={
              <ProtectedRoute>
                <TokenManager loadUserAddress={loadUserAddress}/>
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
