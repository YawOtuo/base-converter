"use client";
import { useLocalStorage } from "@uidotdev/usehooks";

function useHome() {
  let currentView : any;
  let setCurrentView;

  if (typeof window !== "undefined") {
    // If window is defined, useLocalStorage can be safely used
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [currentView, setCurrentView] = useLocalStorage("cview");
  } else {
    // If window is not defined (for example, during server-side rendering),
    // provide default values or mock the behavior as needed
    currentView = null;
    setCurrentView = () => {}; // Provide a dummy function
  }

  return { currentView, setCurrentView };
}

export default useHome;
