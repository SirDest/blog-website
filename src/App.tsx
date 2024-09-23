import React from "react";
import "./App.css";
import Header from "./components/Headers/Header";
import Landing from "./components/Main/Landing";
import SubscribeAd from "./components/Main/SubscribeAd";
import SignInPage from "./components/SignIn/SignInPage";

function App() {
  return (
    <div className='w-full flex flex-col'>
      {/* <Header />
      <SubscribeAd />
      <Landing /> */}
      <SignInPage />
    </div>
  );
}

export default App;
