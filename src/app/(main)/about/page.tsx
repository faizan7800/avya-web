import { Metadata } from "next"
import About from "@modules/about"

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
}

export default function AboutPage() {
  return <About />
}

