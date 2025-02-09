import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export const AuthContext = createContext({
   isAuthenticated: false,
   setIsAuthenticated: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export function AuthProvider({ children }: { children: ReactNode }) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
}
