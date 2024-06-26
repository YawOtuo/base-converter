"use client";

import { NextUIProvider, Tab, Tabs } from "@nextui-org/react";
import BaseCalculator from "./BaseCalculator";
import BaseConverter from "./BaseConverter";
import useHome from "./useHome";

function Home({ children }: any) {
  const { currentView, setCurrentView } = useHome();
  return (
    <div>
      <Tabs
        onSelectionChange={(key) => setCurrentView(key)}
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          base: " w-full flex justify-between xs:w-fit p-[0.5rem] md:overflow-hidden  border-b-yellow1   xs:max-w-[345px]  ",
          tabList: "w-fit flex justify-between gap-4 ",
          tab: "   text-black px-10 py-5",
          tabContent:
            "text-shade-300 text-[1rem] capitalize group-data-[selected=true]:text-black group-data-[selected=true]:font-semibold ",
          cursor: "!border-b-yellow1  border-b-2 text-shade-50 ",
        }}>
        <Tab
          key="base-converter"
          title={
            <div className="flex items-center  gap-2.5 ">
              <p>Base Converter</p>
            </div>
          }>
          <BaseConverter />
        </Tab>
        <Tab
          key="base-calculator"
          title={
            <div className="flex items-center gap-2.5">
              <p>Base Calculator</p>
            </div>
          }>
          <BaseCalculator />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Home;
