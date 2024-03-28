"use client"
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

function useStoreInLC() {

  const [prev, setPrev] = useLocalStorage<any>("prev", [])


  return { prev, setPrev };
}

export default useStoreInLC;
