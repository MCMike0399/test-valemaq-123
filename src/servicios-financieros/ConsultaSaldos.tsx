import TopBar from "../edsup/components/TopBar";
import Footer from "../edsup/components/Footer";
import ContainerHeader from "../edsup/components/ContainerHeader";
import ContainerFooter from "../edsup/components/ContainerFooter";

export default function ConsultaSaldos() {
   const transactions = [
      { fecha: "30-12-2024", descripcion: "SALDO ANTERIOR", importe: -50.1, saldo: -50.1 },
      { descripcion: "--- Exhibicion 1 ---" },
      { fecha: "06-01-2025", descripcion: "COLEGIATURA 38 CREDITOS", importe: 33768.0, saldo: 33767.9 },
      { fecha: "06-01-2025", descripcion: "DEP. LIN. BANCOMER 880-2 LLC", importe: -35000.0, saldo: -1232.1 },
      { fecha: "16-01-2025", descripcion: "ESTACIONAMIENTO MENSUAL ENE.", importe: 949.0, saldo: -5283.1 },
      { fecha: "30-01-2025", descripcion: "CUOTA SALTAM", importe: 350.0, saldo: 66.9 },
      { descripcion: "--- Exhibicion 2 ---" },
      { fecha: "04-02-2025", descripcion: "COLEGIATURA 38 CREDITOS", importe: 29748.0, saldo: 29814.9 },
      { fecha: "04-02-2025", descripcion: "ESTACIONAMIENTO MENSUAL FEB.", importe: 1265.0, saldo: 31079.9 },
      { fecha: "06-02-2025", descripcion: "DEP. LINEA BANAMEX 502-3 LLC", importe: -29748.0, saldo: 1331.9 },
      { descripcion: "--- Exhibicion 3 ---" },
      { fecha: "03-03-2025", descripcion: "COLEGIATURA 38 CREDITOS", importe: 29748.0, saldo: 31079.9 },
      { descripcion: "--- Exhibicion 4 ---" },
      { fecha: "01-04-2025", descripcion: "COLEGIATURA 38 CREDITOS", importe: 29748.0, saldo: 60827.9 },
      { descripcion: "--- Exhibicion 5 ---" },
      { fecha: "02-05-2025", descripcion: "COLEGIATURA 38 CREDITOS", importe: 29748.0, saldo: 90575.9 },
   ];

   // Obtiene la fecha y hora actual
   const now = new Date();
   const formattedDate = now.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
   const formattedTime = now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
   });

   return (
      <div className="min-h-screen bg-white">
         <TopBar />
         {/* Botones de selección */}
         <ContainerHeader />

         {/* Contenedor principal más compacto */}
         <div
            className="bg-[#f3f4f6] mx-4 rounded-lg shadow-md p-4"
            style={{ fontFamily: "'Arial', Helvetica, sans-serif", fontSize: "15px" }}
         >
            {/* Información del usuario */}
            <div className="mb-4 space-y-1">
               <div className="flex gap-4">
                  <span className="font-semibold">Clave única:</span>
                  <span className="font-medium">000202270</span>
               </div>
               <div className="flex gap-4">
                  <span className="font-semibold">Nombre:</span>
                  <span className="font-medium">ANDRADE MAQUEDA VALERIA ANAHI</span>
               </div>
            </div>

            {/* Encabezado de estado de cuenta */}
            <h2 className="text-xl font-bold mb-2">Estado de Cuenta</h2>
            <div className="mb-4">
               <span className="font-semibold">Referencia bancaria:</span> <span className="font-medium">2022703</span>
            </div>

            {/* Fecha de actualización con fecha y hora actual */}
            <div className="mb-2 text-gray-600">
               Consulta de saldo actualizada al: {formattedDate} a las {formattedTime}
            </div>

            {/* Tabla de transacciones compacta y con ancho reducido */}
            <div className="border border-black max-w-3xl mx-auto">
               <table className="w-full border-collapse text-sm">
                  <thead>
                     <tr className="bg-[#D9D9D9] text-black font-bold">
                        <th className="px-2 py-1 text-left border border-black">FECHA</th>
                        <th className="px-2 py-1 text-left border border-black">DESCRIPCIÓN</th>
                        <th className="px-2 py-1 text-right border border-black">IMPORTE</th>
                        <th className="px-2 py-1 text-right border border-black">SALDO ACUMULADO</th>
                     </tr>
                  </thead>
                  <tbody>
                     {transactions.map((item, index) =>
                        item.descripcion.startsWith("---") ? (
                           // Fila de "Exhibición"
                           <tr key={index}>
                              <td colSpan={4} className="px-2 py-1 font-medium text-center border border-black">
                                 {item.descripcion}
                              </td>
                           </tr>
                        ) : (
                           // Filas normales con texto en font-medium
                           <tr key={index}>
                              <td className="px-2 py-1 font-medium border border-black">{item.fecha}</td>
                              <td className="px-2 py-1 font-medium border border-black">{item.descripcion}</td>
                              <td className="px-2 py-1 font-medium text-right border border-black">
                                 {item.importe?.toLocaleString("es-MX", {
                                    style: "currency",
                                    currency: "MXN",
                                    minimumFractionDigits: 2,
                                 })}
                              </td>
                              <td className="px-2 py-1 font-medium text-right border border-black">
                                 {item.saldo?.toLocaleString("es-MX", {
                                    style: "currency",
                                    currency: "MXN",
                                    minimumFractionDigits: 2,
                                 })}
                              </td>
                           </tr>
                        )
                     )}
                  </tbody>
               </table>
            </div>

            {/* Importe a pagar */}
            <div className="mt-4 text-right font-semibold">
               El importe a pagar en la próxima exhibición de: $1,331.90
            </div>
         </div>

         {/* Footer inferior */}
         <ContainerFooter />
         <Footer />
      </div>
   );
}
