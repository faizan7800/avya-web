import { Metadata } from "next"
import FAQPage from "@modules/faq"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Frequently Asked Questions",
}

export default function faq() {
  return <FAQPage />
}
