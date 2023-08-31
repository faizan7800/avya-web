import { Metadata } from "next"
import PrivacyPolicy from "@modules/privacy-policy"

export const metadata: Metadata = {
  title: "Privacy & Policy",
  description: "Privacy & Policy",
}

export default function PrivacyPolicypage() {
  return <PrivacyPolicy />
}
