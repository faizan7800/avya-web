import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-center small:items-center small:p-32 max-w-[1440px] m-auto">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black text-[90px] font-semibold text-center leading-[75px]">
          Praesent eu dolor eu orci vehicula euismod. Viva
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black text-center">
          Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
          libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
          maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
          pulvinar, vel congue ex egestas.
        </p>
        <Link href="/store" className="bg-[#E3B130] p-4 px-16 rounded-full">
          See All Books
        </Link>
      </div>
      <div className="h-full">
        <Image
          src="/homepage/hero_new.jpg"
          loading="eager"
          priority={true}
          quality={90}
          alt=""
          className="absolute inset-0"
          draggable="false"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  )
}

export default Hero
