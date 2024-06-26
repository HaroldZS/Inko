import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { HomePage } from "./Components/HomePage";
import { BlogsPage } from "./Components/BlogsPage";
import { LogInPage } from "./Components/LogInPage";
import { TestPage } from "./Components/TestPage";
import { SignInPage } from "./Components/SignInPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { NewBlog } from "./Components/NewBlog";
import { BlogDetail } from "./Components/BlogDetail";
import {
  AuthRoute,
  OnlyPublicRoute,
  PrivateRoute,
} from "./Components/AuthRoute";
import { inkoInitialState } from "./data/inkoInitialState";

function App() {
  const {
    getStorageItem: getUsers,
    addItem: addUser,
    setStorageItem: updateUsers,
  } = useLocalStorage("users", inkoInitialState);

  const { getStorageItem: getAuth, addItem: setAuth } = useLocalStorage(
    "auth",
    {},
  );

  return (
    <>
      <HashRouter>
        <Menu getAuth={getAuth} setAuth={setAuth} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                getAuth={getAuth}
                setAuth={setAuth}
                getUsers={getUsers}
                updateUsers={updateUsers}
              />
            }
          />
          <Route
            path="/blogs"
            element={
              <BlogsPage
                getUsers={getUsers}
                getAuth={getAuth}
                setAuth={setAuth}
                updateUsers={updateUsers}
              />
            }
          />
          <Route
            path="/blogs/:slug"
            element={
              <BlogDetail
                getUsers={getUsers}
                getAuth={getAuth}
                setAuth={setAuth}
                updateUsers={updateUsers}
              />
            }
          />
          <Route
            path="/log-in"
            element={
              <OnlyPublicRoute getAuth={getAuth}>
                <LogInPage getUsers={getUsers} setAuth={setAuth} />
              </OnlyPublicRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <OnlyPublicRoute getAuth={getAuth}>
                <SignInPage addUser={addUser} setAuth={setAuth} />
              </OnlyPublicRoute>
            }
          />
          <Route
            path="new-blog"
            element={
              <PrivateRoute getAuth={getAuth}>
                <NewBlog
                  getAuth={getAuth}
                  getUsers={getUsers}
                  updateUsers={updateUsers}
                  setAuth={setAuth}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="test"
            element={
              <AuthRoute getAuth={getAuth} roles={["tester"]}>
                <TestPage />
              </AuthRoute>
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                getAuth={getAuth}
                setAuth={setAuth}
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
