import { useNavigate } from "react-router-dom";

function useAuth(setAuth) {
  const navigate = useNavigate();
  const login = (user) => {
    setAuth(user);
    navigate("/");
  };

  const logout = () => setAuth({});
  
  return { login, logout };
}

export { useAuth };
