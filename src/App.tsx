import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';
import { Spotify } from './pages/Spotify';
import {Disney} from "./pages/Disney";
import "./styles/global.scss"


function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} exact component={Home}></Route>
      <Route path={"/spotify"} exact  component={Spotify}></Route>
      <Route path={"/disney"} exact component={Disney}></Route>
    </BrowserRouter>
  );
}

export default App;
