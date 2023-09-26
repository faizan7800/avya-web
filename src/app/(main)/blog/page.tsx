import { Metadata } from "next"
import Blog from "@modules/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
}

export default function TermsAndConditionsPage() {
  return(
    <>
    <Blog />
    </>
  )
}
