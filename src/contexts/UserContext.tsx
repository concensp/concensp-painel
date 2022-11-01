import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

interface UserContextProps {
  login: boolean;
  setLogin(value: boolean): void;
  user: any;
  setUser(value: any): void;
  loading: boolean;
  setLoading(value: boolean): void;
  userLogin(body: { user: string; pass: string }): void;
  userLogout(): void;
}

const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps
);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState<any>(null);
  const [login, setLogin] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setLoading(true);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  const userLogin = async ({ pass, user }: { user: string; pass: string }) => {
    setLoading(true);
    try {
      const res = await api.login({ user, pass });
      const json = await res.json();
      if (json.token) {
        localStorage.setItem("token", json.token);
        setLogin(true);
        setUser({ name: "José" });
        navigate("/");
      } else {
        alert("Usuário ou senha inválidos.");
      }
    } catch (err) {
      alert("Falha ao fazer o login, tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };
  const userLogout = () => {
    setLogin(false);
    setUser(null);
    setLoading(false);
    localStorage.removeItem("token");
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        userLogin,
        userLogout,
        login,
        setLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
