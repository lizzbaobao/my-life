"use client";

import { useState } from "react";
import { WelcomePage, MainPage } from "./components";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleEnter = () => {
    setIsClicked(true);
  };

  if (!isClicked) {
    return <WelcomePage onEnter={handleEnter} />;
  }

  return <MainPage />;
}
