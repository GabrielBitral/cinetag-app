import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/Pages/Inicio";
import Favoritos from "./Pages/Favoritos";
import Player from "./Pages/Player";
import NaoEncontrada from "./Pages/NaoEncontrada";
import PaginaBase from "./Pages/PaginaBase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="player/:id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
