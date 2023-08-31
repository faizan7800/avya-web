import { Metadata } from "next"
import CancellationPolicy from "@modules/cancellation-policy"

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Cancellation Policy",
}

export default function CancellationPolicyPage() {
  return <CancellationPolicy />
}
