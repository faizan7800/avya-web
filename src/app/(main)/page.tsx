import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Services from "@modules/home/components/services"
import HomeAbout from "@modules/home/components/home-about"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProducts />
      <HomeAbout />
    </>
  )
}

export default Home
