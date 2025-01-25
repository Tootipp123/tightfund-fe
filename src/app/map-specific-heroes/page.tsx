import Footer from "@/components/features/Footer"
import Navbar from "@/components/features/Navbar"

export default function MapSpecificHeroesPage() {
  const DATA = [
    {
      mapName: "Yggsgard",
      image: "",
      heroes: [
        {

        }
      ]
    }
  ]
  return (
    <div>
      <Navbar />
      <main className="bg-[#1B1B29] min-h-[100vh]">
        <div className="w-full px-3 md:px-0 md:w-[1200px] mx-auto pb-[150px]">
          <header className="pt-[40px] md:pt-[100px] relative">
            <h1 className="text-2xl md:text-3xl text-neutral-100 relative px-[0px] md:px-[300px] font-black text-center">
              Select a Map
            </h1>
            <p className="text-center mt-4 text-neutral-200 font-medium">
              Select a map and see the list of heroes that has the high potential to dominate in it.
            </p>
          </header>

          <section className="mt-[40px] md:mt-[100px]">
            
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}