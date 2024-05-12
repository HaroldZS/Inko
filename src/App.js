import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { HomePage } from "./Components/HomePage";
import { BlogPage } from "./Components/BlogPage";
import { LoginPage } from "./Components/LoginPage";
import { TestPage } from "./Components/TestPage";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
