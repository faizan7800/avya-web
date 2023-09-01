import { Metadata } from "next"
import ContactUs from "@modules/contact-us"

export const metadata: Metadata = {
  title: "Contact US",
  description: "Contact US",
}

export default function ContactUsPage() {
  return <ContactUs />
}
