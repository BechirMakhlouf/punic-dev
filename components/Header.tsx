import Image from "next/image";
import DarkLogo from "../public/logo/SVG/White Full Logo.svg";
import WhiteLogo from "../public/logo/SVG/White Full Logo.svg";

export default function Header() {
  return (
    <>
      <header className="flex justify-center mb-8">
        <div
          id="header-content"
          className="max-w-[1700px] w-full p-4 flex justify-between"
        >
          <Image src={DarkLogo} alt="punic-dev logo" width={120} height={120} />
          <ul className="lg:flex justify-between items-center w-1/2 max-w-2xl text-gray-300 cursor-pointer hidden">
            <li className="">Home</li>
            <li className="">Services</li>
            <li className="">Our Work</li>
            <li className="">About Us</li>
            <li className="">Contact Us</li>
          </ul>
        </div>
      </header>
    </>
  );
}
