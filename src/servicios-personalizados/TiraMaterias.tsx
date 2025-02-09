import TopBar from "../edsup/components/TopBar";
import Footer from "../edsup/components/Footer";
import ContainerHeader from "../edsup/components/ContainerHeader";
import UserInfo from "../edsup/components/UserInfo";

export default function TiraMaterias() {
   const schedule = [
      {
         time: "07:00-07:30",
         monday: "",
         tuesday: "COM-14101-001",
         wednesday: "COM-14101-001",
         thursday: "COM-14101-001",
         friday: "COM-12102-001",
         saturday: "",
      },
      {
         time: "07:30-08:00",
         monday: "",
         tuesday: "COM-14101-001",
         wednesday: "COM-14101-001",
         thursday: "COM-14101-001",
         friday: "COM-12102-001",
         saturday: "",
      },
      {
         time: "08:00-08:30",
         monday: "",
         tuesday: "COM-14101-001",
         wednesday: "COM-14101-001",
         thursday: "COM-14101-001",
         friday: "COM-12102-001",
         saturday: "",
      },
      {
         time: "08:30-09:00",
         monday: "",
         tuesday: "COM-14101-001",
         wednesday: "COM-14101-001",
         thursday: "COM-14101-001",
         friday: "COM-12102-001",
         saturday: "",
      },
      {
         time: "09:00-09:30",
         monday: "",
         tuesday: "COM-14101-001",
         wednesday: "COM-14101-001",
         thursday: "COM-14101-001",
         friday: "COM-12102-001",
         saturday: "",
      },
      {
         time: "09:30-10:00",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "10:00-10:30",
         monday: "",
         tuesday: "COM-14105-001",
         wednesday: "COM-14105-001",
         thursday: "COM-14105-001",
         friday: "",
         saturday: "",
      },
      {
         time: "10:30-11:00",
         monday: "",
         tuesday: "COM-14105-001",
         wednesday: "COM-14105-001",
         thursday: "COM-14105-001",
         friday: "",
         saturday: "",
      },
      {
         time: "11:00-11:30",
         monday: "",
         tuesday: "COM-14105-001",
         wednesday: "COM-14105-001",
         thursday: "COM-14105-001",
         friday: "",
         saturday: "",
      },
      {
         time: "11:30-12:00",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "12:00-12:30",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "12:30-13:00",
         monday: "",
         tuesday: "SDI-13782-002",
         wednesday: "SDI-13782-002",
         thursday: "SDI-13782-002",
         friday: "SDI-13782-002",
         saturday: "",
      },
      {
         time: "13:00-13:30",
         monday: "",
         tuesday: "SDI-13782-002",
         wednesday: "SDI-13782-002",
         thursday: "SDI-13782-002",
         friday: "SDI-13782-002",
         saturday: "",
      },
      {
         time: "13:30-14:00",
         monday: "",
         tuesday: "SDI-13782-002",
         wednesday: "SDI-13782-002",
         thursday: "SDI-13782-002",
         friday: "SDI-13782-002",
         saturday: "",
      },
      {
         time: "14:00-14:30",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "14:30-15:00",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "15:00-15:30",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "15:30-16:00",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "16:00-16:30",
         monday: "SDI-11561-001",
         tuesday: "",
         wednesday: "SDI-11561-001",
         thursday: "",
         friday: "SDI-11561-001",
         saturday: "",
      },
      {
         time: "16:30-17:00",
         monday: "SDI-11561-001",
         tuesday: "",
         wednesday: "SDI-11561-001",
         thursday: "",
         friday: "SDI-11561-001",
         saturday: "",
      },
      {
         time: "17:00-17:30",
         monday: "SDI-11561-001",
         tuesday: "",
         wednesday: "SDI-11561-001",
         thursday: "",
         friday: "SDI-11561-001",
         saturday: "",
      },
      {
         time: "17:30-18:00",
         monday: "SDI-11561-001",
         tuesday: "",
         wednesday: "SDI-11561-001",
         thursday: "",
         friday: "SDI-11561-001",
         saturday: "",
      },
      {
         time: "18:00-18:30",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "18:30-19:00",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "19:00-19:30",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "19:30-20:00",
         monday: "",
         tuesday: "",
         wednesday: "LEN-12724-001",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "20:00-20:30",
         monday: "",
         tuesday: "",
         wednesday: "LEN-12724-001",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "20:30-21:00",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "21:00-21:30",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
      {
         time: "21:30-22:00",
         monday: "",
         tuesday: "",
         wednesday: "",
         thursday: "",
         friday: "",
         saturday: "",
      },
   ];
   const subjects = [
      {
         materia: "COM 12102",
         gpo: "001",
         nombre: "ANALISIS Y DIS. DE SIS.DE INFO",
         status: "INSCRITO",
         profesor: "BUSTOS ARELLANO PAULINA",
         salon: "RHLI1",
         campus: "RIO HONDO",
         salidaEmergencia: "09",
         areaSeguridad: "09",
         dias: "VI",
         horario: "07:00-10:00",
      },
      {
         materia: "COM 14101",
         gpo: "001",
         nombre: "FUNDAMENTOS MAT. DE LA COMPU.",
         status: "INSCRITO",
         profesor: "CONDE MARTINEZ RODOLFO",
         salon: "RHCC201",
         campus: "RIO HONDO",
         salidaEmergencia: "10",
         areaSeguridad: "10",
         dias: "MA JU",
         horario: "07:00-08:30",
      },
      {
         materia: "COM 14105",
         gpo: "001",
         nombre: "ALGORITMOS NUM. POR COMPU.",
         status: "INSCRITO",
         profesor: "MEJIA OLVERA MARCELO CARLOS",
         salon: "RHCC101",
         campus: "RIO HONDO",
         salidaEmergencia: "10",
         areaSeguridad: "10",
         dias: "LU MI",
         horario: "10:00-11:30",
      },
      {
         materia: "LEN 12724",
         gpo: "001",
         nombre: "COM. ESCRITA PARA ING EN COMP.",
         status: "INSCRITO",
         profesor: "ZOZAYA BECERRA FLORENCIA GRACI",
         salon: "RH202",
         campus: "RIO HONDO",
         salidaEmergencia: "04",
         areaSeguridad: "04",
         dias: "MI",
         horario: "19:00-20:00",
      },
      {
         materia: "SDI 11561",
         gpo: "001",
         nombre: "PRINCIPIOS DE MECATRONICA",
         status: "INSCRITO",
         profesor: "MARTINEZ RAMIREZ MARCO ANTONIO",
         salon: "RHLCLMP",
         campus: "RIO HONDO",
         salidaEmergencia: "09",
         areaSeguridad: "08/13",
         dias: "VI",
         horario: "16:00-18:00",
      },
      {
         materia: "SDI 11561",
         gpo: "001",
         nombre: "PRINCIPIOS DE MECATRONICA",
         status: "INSCRITO",
         profesor: "ROMERO VELAZQUEZ JOSE GUADALUP",
         salon: "RH314",
         campus: "RIO HONDO",
         salidaEmergencia: "07",
         areaSeguridad: "07",
         dias: "LU MI",
         horario: "16:00-18:00",
      },
      {
         materia: "SDI 13782",
         gpo: "002",
         nombre: "DISEÑO Y ARQUITECT. DE REDES",
         status: "INSCRITO",
         profesor: "INCERA DIEGUEZ JOSE ALBERTO DO",
         salon: "RH316",
         campus: "RIO HONDO",
         salidaEmergencia: "07",
         areaSeguridad: "07",
         dias: "LU MI",
         horario: "12:30-14:00",
      },
      {
         materia: "SDI 13782",
         gpo: "002",
         nombre: "DISEÑO Y ARQUITECT. DE REDES",
         status: "INSCRITO",
         profesor: "PEREIRA GONZALEZ WILMER EFREN",
         salon: "RHLREDE",
         campus: "RIO HONDO",
         salidaEmergencia: "09",
         areaSeguridad: "09",
         dias: "VI",
         horario: "12:00-14:00",
      },
   ];

   return (
      <div className="min-h-screen bg-white">
         <TopBar />
         <ContainerHeader />
         <div
            className="bg-[#f3f4f6] mx-4 rounded-lg shadow-md p-4"
            style={{ fontFamily: "'Arial', Helvetica, sans-serif", fontSize: "15px" }}
         >
            <UserInfo />
            <div className="border border-black max-w-6xl mb-8 ">
               <table className="w-full border-collapse text-sm">
                  <thead>
                     <tr className="bg-[#D9D9D9] text-black font-bold">
                        <th className="px-4 py-1 border border-black">MATERIA</th>
                        <th className="px-2 py-1 border border-black">GPO</th>
                        <th className="px-2 py-1 border border-black">NOMBRE</th>
                        <th className="px-2 py-1 border border-black">STATUS</th>
                        <th className="px-2 py-1 border border-black">PROFESOR</th>
                        <th className="px-2 py-1 border border-black">SALON</th>
                        <th className="px-2 py-1 border border-black">CAMPUS</th>
                        <th className="px-2 py-1 border border-black">SALIDA DE EMERGENCIA</th>
                        <th className="px-2 py-1 border border-black">AREA DE SEGURIDAD</th>
                        <th className="px-2 py-1 border border-black">DIAS</th>
                        <th className="px-2 py-1 border border-black">HORARIO</th>
                     </tr>
                  </thead>
                  <tbody>
                     {subjects.map((item, index) => (
                        <tr key={index}>
                           <td className="px-2 py-1 border border-black">{item.materia}</td>
                           <td className="px-2 py-1 border border-black">{item.gpo}</td>
                           <td className="px-2 py-1 border border-black">{item.nombre}</td>
                           <td className="px-2 py-1 border border-black">{item.status}</td>
                           <td className="px-2 py-1 border border-black">{item.profesor}</td>
                           <td className="px-2 py-1 border border-black">{item.salon}</td>
                           <td className="px-2 py-1 border border-black">{item.campus}</td>
                           <td className="px-2 py-1 border border-black">{item.salidaEmergencia}</td>
                           <td className="px-2 py-1 border border-black">{item.areaSeguridad}</td>
                           <td className="px-2 py-1 border border-black">{item.dias}</td>
                           <td className="px-2 py-1 border border-black">{item.horario}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <UserInfo />
            <div className="border border-black max-w-5xl">
               <table className="w-full border-collapse text-sm">
                  <thead>
                     <tr className="bg-[#D9D9D9] text-black font-bold">
                        <th className="px-2 py-1 border border-black">HORA</th>
                        <th className="px-2 py-1 border border-black">LUNES</th>
                        <th className="px-2 py-1 border border-black">MARTES</th>
                        <th className="px-2 py-1 border border-black">MIÉRCOLES</th>
                        <th className="px-2 py-1 border border-black">JUEVES</th>
                        <th className="px-2 py-1 border border-black">VIERNES</th>
                        <th className="px-2 py-1 border border-black">SÁBADO</th>
                     </tr>
                  </thead>
                  <tbody>
                     {schedule.map((row, index) => (
                        <tr key={index}>
                           <td className="px-2 py-1 border border-black">{row.time}</td>
                           <td className="px-2 py-1 border border-black">{row.monday}</td>
                           <td className="px-2 py-1 border border-black">{row.tuesday}</td>
                           <td className="px-2 py-1 border border-black">{row.wednesday}</td>
                           <td className="px-2 py-1 border border-black">{row.thursday}</td>
                           <td className="px-2 py-1 border border-black">{row.friday}</td>
                           <td className="px-2 py-1 border border-black">{row.saturday}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
         <Footer />
      </div>
   );
}
