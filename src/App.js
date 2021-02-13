import React from "react";
import { useRoutes } from "hookrouter";
import Routers from "./routers";
import "./style.css";

export default function App() {
  const routeResult = useRoutes(Routers);
  return (
    <>
      {/*sad */}
      {routeResult}
    </>
  );
}
