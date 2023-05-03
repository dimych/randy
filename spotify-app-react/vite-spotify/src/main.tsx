import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TrackManipulation } from "./components/TrackManipulation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TrackManipulation />
);
