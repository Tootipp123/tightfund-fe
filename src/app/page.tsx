import AdviceCard from "@/components/features/AdviceCard";
import Footer from "@/components/features/Footer";
import Hero from "@/components/features/Hero";
import Navbar from "@/components/features/Navbar";
import HowToSvg from "@/components/icons/HowToSvg";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <main className="flex flex-col md:flex-row items-center justify-center px-8 md:py-[80px] relative z-10">
        <Hero />
        <div className="md:absolute bottom-0 md:right-[150px] md:mt-0 z-20">
          <AdviceCard amount={30400} months={7.2} confidenceScore={94} />
        </div>
        <div className="circle-texture absolute z-[2] right-5 bottom-[-150px]"></div>
        <div className="circle-2-texture absolute z-[2] right-[-50px] bottom-[-200px]"></div>
      </main>
      <div
        id="problem-and-solution"
        className="bg-dark-main py-[130px] z-[50] relative"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-[100px] md:gap-10 w-[60%] md:w-[800px] m-auto">
          <div>
            <h4 className="text-light-main text-center text-xl mb-5 font-semibold">
              The Problem
            </h4>
            <p className="text-light-main text-center text-lg">
              Most people don't know how much emergency fund is enough for their
              situation to give them peace of mind.
            </p>
          </div>
          <div>
            <h4 className="text-light-main text-center text-xl mb-5 font-semibold">
              The Solution
            </h4>
            <p className="text-light-main text-center text-lg">
              Get your exact emergency fund target with our smart calculator
              that analyzes your job security, stability, and personal situation
            </p>
          </div>
        </div>
      </div>
      <div id="how-it-works" className="py-[130px]">
        <h4 className="text-dark-main text-center text-2xl font-semibold mb-12">
          How It Works
        </h4>
        <div className="flex items-center justify-center">
          <HowToSvg />
        </div>
      </div>
      <Footer />
    </div>
  );
}
