import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { HomePage } from "./Components/HomePage";
import { BlogPage } from "./Components/BlogPage";
import { LogInPage } from "./Components/LogInPage";
import { TestPage } from "./Components/TestPage";
import { SignInPage } from "./Components/SignInPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
// import { useAuthUser } from "./hooks/useAuthUser";

function App() {
  const {
    item,
    setItem,
    getStorageItem: getUsers,
    setStorageItem,
    addItem: addUser,
  } = useLocalStorage("users", []);

  const { getStorageItem: getAuth, addItem: setAuth } = useLocalStorage(
    "newUser",
    {},
  );

  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route
            path="/log-in"
            element={<LogInPage getUsers={getUsers} setAuth={setAuth} />}
          />
          <Route path="/sign-in" element={<SignInPage addUser={addUser} />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
