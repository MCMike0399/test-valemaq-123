import ItamLogo from "@/assets/footer/sghe-logo-small-black.png";

export default function Footer() {
   return (
      <footer className="sticky top-[100vh] bg-[#005749] w-full h-[40px] flex justify-end items-center px-4 border-t-[4px] border-[#8B0000]">
         <img src={ItamLogo} alt="ITAM Logo" width={50} height={20} />
      </footer>
   );
}
