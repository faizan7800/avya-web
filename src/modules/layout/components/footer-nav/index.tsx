"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import Image from "next/image"
import CountrySelect from "../country-select"
import icon1 from "../../../../../public/header/icon1.svg"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8 bg-[#173300]">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div className="basis-1/4">
          <Link href="/" className="text-xl-semi uppercase">
            <Image src={icon1} alt="Company icon" />
          </Link>
        <div className="text-white text-sm italic">Learn More</div>
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
            <span className="text-xl font-bold">Latest Release</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="/about" className="text-base">
                Master your Mind
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-base">
                HabitBoost
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-base">
                Navigating Change
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-base">
                The Joy of Self Care
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-bold"></span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="/privacy-policy" className="text-base">
                Finding Balance
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-base">
                Mindful Living
                </a>
              </li>
              <li>
                <a href="/cancellation-policy" className="text-base">
                The Power of Resilience
                </a>
              </li>
              <li>
                <a href="/faq" className="text-base">
                Unlock your Potential
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/4 space-y-2">
          <p className=" text-xl font-bold">More</p>
          <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="/#" className="text-base">
                About Us
                </a>
              </li>
              <li>
                <a href="/#" className="text-base">
                Blog
                </a>
              </li>
              <li>
                <a href="/#" className="text-base">
                Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-base">
                FAQ
                </a>
              </li>
            </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-white">
        © Copyright 2023 | GrowthReads
        </span>
        <div className="flex">
        <div className="pr-8">
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
