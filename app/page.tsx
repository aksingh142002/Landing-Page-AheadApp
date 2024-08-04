import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Emotions from "@/components/Emotions";
import Manifesto from "@/components/Manifesto";
import SelfImprovement from "@/components/SelfImprovement";
import AboutOthers from "@/components/AboutOthers";
import TakeTest from "@/components/TakeTest";
import WorkWithUs from "@/components/WorkWithUs";
import Vacancies from "@/components/Vacancies";
import Download from "@/components/Download";

export default function Home() {
  return (
    <main>
     <Navbar />
     <Hero />
     <Emotions />
     <Manifesto />
     <SelfImprovement />
     <AboutOthers />
     <TakeTest />
     <WorkWithUs />
     <Vacancies/>
     <Download />
    </main>
  );
}
