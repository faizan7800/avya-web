import { Metadata } from "next"
import TermsAndConditionsTemplate from "@modules/terms-and-conditions"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions",
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsTemplate />
}
