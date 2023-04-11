import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export default function Home() {
  return <h1 className={`${poppins.className} `}>Swiebeltje</h1>;
}
