import { useState } from "react";

import "./App.css";
import { Button } from "@headlessui/react";
import Icon from './Icon.tsx'

function App() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center items-center text-3xl font-bold">
        THRYVE
      </div>
      <div className="w-full flex justify-center items-center">
        <Button
          className={
            "border border-red-500 hover:cursor-pointer bg-amber-500 rounded p-2 active:bg-amber-700"
          }
          onClick={() => {}}
        >
          Headless UI Button
        </Button>
      </div>
      <div>
        <Icon goalCategory='romance' />
      </div>
    </div>
  );
}

export default App;
