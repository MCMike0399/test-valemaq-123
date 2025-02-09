import { Routes, Route } from "react-router";
import EdsupPage from "./edsup/EdsupPage";
import ServiciosFinancieros from "./servicios-financieros/ConsultaSaldos";
import StatusPlanesPermisos from "./servicios-personalizados/StatusPlanesPermisos";
import TiraMaterias from "./servicios-personalizados/TiraMaterias";
import HistorialAcademico from "./servicios-personalizados/HistorialAcademico";
import AccessDenied from "./edsup/AccessDenied";
import LoginPage from "./home/LoginPage";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
   return (
      <AuthProvider>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
               path="/edsup"
               element={
                  <ProtectedRoute>
                     <EdsupPage />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/edsup/consulta-saldos"
               element={
                  <ProtectedRoute>
                     <ServiciosFinancieros />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/edsup/status-planes-permisos"
               element={
                  <ProtectedRoute>
                     <StatusPlanesPermisos />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/edsup/tira-materias"
               element={
                  <ProtectedRoute>
                     <TiraMaterias />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/edsup/historial-academico"
               element={
                  <ProtectedRoute>
                     <HistorialAcademico />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/edsup/access-denied"
               element={
                  <ProtectedRoute>
                     <AccessDenied />
                  </ProtectedRoute>
               }
            />
         </Routes>
      </AuthProvider>
   );
}
