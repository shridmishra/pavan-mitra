import Image from "next/image";
import { Header } from "../components/Header";
import { CityCard } from "@/components/CityCard";

export default function Home() {
  return (
    <div className="bg-black font-sans">
      <Header/>
      <CityCard />
    </div>
  );
}
