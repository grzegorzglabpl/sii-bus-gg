import React from "react";
import Pages from "./pages";

import { AKTUALNY_ROK, Komponent } from "./pages";

const { Aktualnosci, MojeZamowienia, MojProfil, NaszeMenu } = Pages;

console.log(AKTUALNY_ROK);

const Routers = {
  "/": () => <Aktualnosci />,
  "/aktualnosci": () => <Aktualnosci />,
  "/moje-zamowienia": () => <MojeZamowienia />,
  "/moj-profil": () => <MojProfil />,
  "/nasze-menu": () => <NaszeMenu />
};

export default Routers;
