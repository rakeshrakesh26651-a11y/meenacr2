"use client";

import React from "react";
import Home from "./app/page";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <Home />
    </SmoothScroll>
  );
}

export { Home };
