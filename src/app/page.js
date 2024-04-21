import Banner from "@/components/Banner"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import PopularCars from "@/components/PopularCars"
export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <Banner />
      <Features />
      <PopularCars />
      <Testimonials />

    </main>
  )
}