"use client";

import { NextUIProvider } from "@nextui-org/react";
import Home from "./components/Home";

function Page() {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}

export default Page;
