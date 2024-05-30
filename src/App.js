import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { HomePage } from "./Components/HomePage";
import { BlogPage } from "./Components/BlogPage";
import { LogInPage } from "./Components/LogInPage";
import { TestPage } from "./Components/TestPage";
import { SignInPage } from "./Components/SignInPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { NewBlog } from "./Components/NewBlog";

function App() {
  const {
    getStorageItem: getUsers,
    addItem: addUser,
    setStorageItem: updateUsers,
  } = useLocalStorage("users", []);

  const { getStorageItem: getAuth, addItem: setAuth } = useLocalStorage(
    "auth",
    {},
  );

  return (
    <>
      <HashRouter>
        <Menu getAuth={getAuth} setAuth={setAuth} />
        <Routes>
          <Route path="/" element={<HomePage getAuth={getAuth} />} />
          <Route path="/blogs" element={<BlogPage getUsers={getUsers} />} />
          <Route path="/test" element={<TestPage />} />
          <Route
            path="/log-in"
            element={<LogInPage getUsers={getUsers} setAuth={setAuth} />}
          />
          <Route
            path="/sign-in"
            element={<SignInPage addUser={addUser} setAuth={setAuth} />}
          />
          <Route
            path="new-blog"
            element={
              <NewBlog
                getAuth={getAuth}
                getUsers={getUsers}
                updateUsers={updateUsers}
              />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
