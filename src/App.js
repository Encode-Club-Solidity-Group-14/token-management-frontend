import { BrowserRouter as Router, Routes, Route, useMatch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Button from "./components/ButtonComponent/Button";
import Homepage from "./pages/homepage";
import TokenGenerator from "./pages/token-generator";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { M, MainContainer, NavWrapper } from "./themes/container";
import TokenManager from "./pages/token-manager";
import { ProtectedRoute } from "./ProtectedRoutes";
import React from "react";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Buffer } from "buffer/";
import Claim from "./pages/claim";
window.Buffer = window.Buffer || Buffer;

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
    <ToastContainer />
      {!routeMatch && (
        <MainContainer>
          <NavWrapper>
            <Navigation
              linkNames={[
                { id:"1", link: 'Token Manager', to: '/token-manager' },
                { id:"2", link: 'Transaction History', to: '/transaction-history' },
                { id:"3", link: 'Holders', to: '/top-holders' },
                { id:"4", link: 'Analytics', to: '#' },
                { id:"5", link: 'Claim Tokens!!!', to: '/claim' },
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
                <TokenManager loadUserAddress={loadUserAddress} scripts={true}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/transaction-history"
            element={
              <ProtectedRoute>
                <TokenManager loadUserAddress={loadUserAddress} tokenHistory={true}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/top-holders"
            element={
              <ProtectedRoute>
                <TokenManager loadUserAddress={loadUserAddress} topTokenHolders={true}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/claim"
            element={
              <ProtectedRoute>
                <Claim loadUserAddress={loadUserAddress}/>
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
