import FeaturedClasses from "@modules/home/components/featured-classes"
import Hero from "@modules/home/components/hero"
import SecondHero from "@modules/home/components/hero-2"
import HomeRating from "@modules/home/components/home_rating"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
    <div className="bg-white">
      <Hero />
      <FeaturedClasses />
      <SecondHero />
      <HomeRating />
      {/* <HomeAbout /> */}
    </div>
    </>
  )
}

export default Home
