import { Metadata } from "next"
import RefundPolicy from "@modules/refund-policy"

export const metadata: Metadata = {
    title: "Refund & Policy",
    description: "Refund & Policy",
}

export default function RefundandPolicy() {
    return <RefundPolicy />
}
