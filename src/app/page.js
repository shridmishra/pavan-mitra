import Image from "next/image";
import { Header } from "../components/Header";
import { CityCard } from "@/components/CityCard";
import { LeaderBoard } from "@/components/LeaderBoard";

export default function Home() {
  return (
    <div className="bg-slate-900 ">
      <Header />
      <CityCard />
      <LeaderBoard/>

    </div>
  );
}
