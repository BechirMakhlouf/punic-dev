import Header from "@/components/Header";
import Image from "next/image";
import punicIcon from "../public/logo/SVG/White Short Logo.svg"
export default function Home() {
  return (
    <>
      <main className="border border-red-900 w-full flex justify-around">
        <div id="cta" className="flex flex-col justify-center sm:min-h-[800px] w-full">
          <h1 className="border border-white text-6xl text-center">
            It&apos;s Time To Level Up <br /> Your Digital Game.
          </h1>
          <button className="border border-white">Let&apos;s Chat</button>
        </div>

        <div className="flex justify-center items-center w-full border border-white">
          <Image src={punicIcon} width={400} height={400} alt="icon" />
        </div>
      </main>
    </>
  );
}
