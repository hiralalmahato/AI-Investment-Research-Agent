import React from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "text-xs font-medium border border-border bg-surface text-text-main",
          duration: 3500,
          style: {
            borderRadius: "6px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          },
        }}
      />
      <Home />
    </>
  );
}

export default App;
