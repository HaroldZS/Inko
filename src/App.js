import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
      </HashRouter>
    </>
  );
}

export default App;
