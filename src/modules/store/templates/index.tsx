"use client"

import FeaturedClasses from "@modules/home/components/featured-classes"
import HomeRating from "@modules/home/components/home_rating"
import Link from "next/link"

const StoreTemplate = () => {

  return (
    <>
      <div className="bg-[#173300] h-28 md:h-44 lg:h-60">
        <h1 className=" text-white font-bold text-2xl  md:py-16 lg:py-20 text-center">
          Collections
        </h1>
      </div>
    <FeaturedClasses />
        
    <div className="bg-[#F9F9F9] lg:flex lg:mx-32 lg:justify-center lg:my-20 2xl:mx-[29rem] 2xl:max-w-1920 2xl:mx-auto">
        <img className=" md:w-full lg:h-96 lg:w-80 lg:order-1 xl:w-96 xl:h-[30rem]" src="/store/store_img.jpg" alt="" />

        <div className="text-black text-slate-500 py-8 px-8 lg:w-96 lg:mr-60 lg:mt-16 2xl:mr-96">
          <h3 className="text-black mt-4 text-2xl 2xl:text-3xl">
          Aenean sed lorem est. Sed quis
          </h3>
          <p className="text-black text-sm mt-4 2xl:text-xl">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
            maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
            pulvinar
          </p>
          <div className="mt-6 pb-3">
            <Link
              href="/store"
              className="text-white text-xs mb-2 p-2 px-6 bg-[#1E3708] rounded-full ring-2 ring-white"
            >
              See All Books
            </Link>
          </div>
        </div>
        </div>
        <HomeRating />
    </>
  )
}

export default StoreTemplate
