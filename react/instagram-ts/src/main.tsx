import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Shop } from "./components/shop/Shop";
import { Barbershop } from "./components/barbershop/Barbershop";
import { Todolist } from "./components/todolist/Todolist";
// import { ImmutableExample } from "./components/todolist/Todolist";
import { Practice } from "./components/todolist/Practice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Practice />
);
