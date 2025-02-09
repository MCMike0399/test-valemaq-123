import TopBar from "../edsup/components/TopBar";
import Footer from "../edsup/components/Footer";
import ContainerHeader from "../edsup/components/ContainerHeader";
import UserInfo from "../edsup/components/UserInfo";
import ContainerFooter from "./components/ContainerFooter";

export default function AccessDenied() {
   return (
      <div className="min-h-screen bg-white">
         <TopBar />
         <ContainerHeader />
         <div
            className="bg-[#f3f4f6] mx-4 rounded-lg shadow-md p-4"
            style={{ fontFamily: "'Arial', Helvetica, sans-serif", fontSize: "15px" }}
         >
            <UserInfo />
            <div className="bg-[#067760] w-full h-[20px]"></div>
            <div className="flex gap-4 mt-4">
               <span className="font-semibold text-red-600">Access Denied</span>
            </div>
            <ContainerFooter />
         </div>

         <Footer />
      </div>
   );
}
