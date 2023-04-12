import Image from "next/image";
import { Poppins } from "next/font/google";
import CountdownTimer from "../components/CountdownTimer";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export default function Home() {
  return (
    <section
      className={`${poppins.className} absolute left-0 top-0 w-full h-full flex justify-center items-center sm:text-2xl md:text-3xl font-light text-center`}
    >
      <CountdownTimer />
    </section>
  );
}
