import { Metadata } from "next"
import About from "@modules/about"
import Bitcoin from "@modules/about/Bitcoin"
import BottomSection from "@modules/about/bottom_section"
import FeaturedClasses from "@modules/home/components/featured-classes"

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-white">
        <About />
        <Bitcoin />
        {/* <BottomSection /> */}
        <div className="pb-12">{/* <FeaturedClasses /> */}</div>
      </div>
    </>
  )
}
