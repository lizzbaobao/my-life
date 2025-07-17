"use client";

import { useState } from "react";
import { WelcomePage, MainPage, TransitionPage } from "./components";

export default function Home() {
  const [pageState, setPageState] = useState<"welcome" | "transition" | "main">(
    "welcome"
  );

  const handleEnter = () => {
    setPageState("transition");
  };

  const handleTransitionComplete = () => {
    setPageState("main");
  };

  if (pageState === "welcome") {
    return <WelcomePage onEnter={handleEnter} />;
  }

  if (pageState === "transition") {
    return <TransitionPage onTransitionComplete={handleTransitionComplete} />;
  }

  return <MainPage />;
}
