import { useContext, ReactNode } from "react";
import { Navigate } from "react-router"; // Usamos react-router-dom para la navegación
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
   const { isAuthenticated } = useContext(AuthContext);

   if (!isAuthenticated) {
      // Si no está autenticado, redirige a la ruta principal (login)
      return <Navigate to="/" />;
   }

   // Si está autenticado, renderiza los componentes hijos
   return children;
}
