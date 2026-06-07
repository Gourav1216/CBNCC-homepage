import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WhyJoinCBNCC } from "./sections/WhyJoinCBNCC";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <WhyJoinCBNCC />
    </main>
  </StrictMode>
);
