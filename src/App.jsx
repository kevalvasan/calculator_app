import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-sm p-6 bg-gray-900 rounded-xl shadow-xl">
        <div className="text-right text-white text-2xl font-mono bg-gray-800 p-4 rounded mb-5">
          {display || "0"}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <Button key={btn} value={btn} onClick={handleClick} />
          ))}
          <Button
            value="C"
            onClick={handleClick}
            className="col-span-4 bg-red-600 hover:bg-red-700 text-white font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
