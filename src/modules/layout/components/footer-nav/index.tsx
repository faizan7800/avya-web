"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import Image from "next/image"
import CountrySelect from "../country-select"
import icon from "../../../../../public/header/icon.svg"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div className="basis-1/4">
          <Link href="/" className="text-xl-semi uppercase">
            <Image src={icon} alt="Company icon" />
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16 basis-1/2">
          {/* <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-bold">Features</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="/about" className="text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-base">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-bold">Features</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="/privacy-policy" className="text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-base">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/cancellation-policy" className="text-base">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="text-base">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/4 space-y-2">
          <p className=" text-xl font-bold">Subscribe</p>
          <p className="text-base">
            Duis pretium gravida enim, vel maximus ligula fermentum a. Sed
            rhoncus eget ex id egestas. Nam nec nisl placerat, tempus erat a,
            condimentum metus.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2023 Fitness Tribe
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
