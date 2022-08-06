import React from "react";
import Navigation from "../../components/Navigation";
import { HomepageWrapper } from "./styles";
import Button from "../../components/ButtonComponent/Button";
import { useMoralis } from "react-moralis"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

// const options = {
//   params: { userAddress: '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc' },
// }
const Homepage = () => {

  //const { data } = useMoralisCloudQuery('helloworld', options)

  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    Moralis,
    provider
  } = useMoralis()

  const navigate = useNavigate();

   useEffect(() => {
     console.log(isAuthenticated)
     if (isAuthenticated) {
       navigate("/token")
     }

   }, [isAuthenticated])

  const login = async () => {
    if (!isAuthenticated) {
      var user = await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user?.get('ethAddress'))
          if (user) {
            user.save()
            navigate('/')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  return (
    // <HomepageWrapper>
    <>
      <div className="center">
        <Button
          classnames={["connect-btn"]}
          label={"Connect Wallet"}
          onClick={login}
        />
      </div>
      {/* </HomepageWrapper> */}
    </>
  );
};

export default Homepage;
