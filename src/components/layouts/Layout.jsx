"use client";

import { useState } from "react";
import Navbar from "./navbar/Navbar";
import SplashScreen from "../ui/SplashScreen";
import Container from "../Container";

const Layout = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <div>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <div>
          <Navbar />
          <Container>{children}</Container>
        </div>
      )}
    </div>
  );
};

export default Layout;
