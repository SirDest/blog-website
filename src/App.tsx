import React from "react";
import "./App.css";
import Header from "./components/Headers/Header";
import Landing from "./components/Main/Landing";
import SubscribeAd from "./components/Main/SubscribeAd";
import SignInPage from "./components/SignIn/SignInPage";

function App() {
  return (
    <div className='w-full flex flex-col'>
      <Header />
      <div className='w-full h-fit lg:px-16 md:px-8 px-4'>
        <SubscribeAd />
        <Landing />
      </div>
      {/* <SignInPage /> */}
    </div>
  );
}

export default App;
