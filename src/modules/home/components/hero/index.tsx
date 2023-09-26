import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="">
  <section>
    <div className="relative">
      <img className="w-full h-[65vh] md:h-[90vh] lg:h-[80vh] object-cover" src="/homepage/hero_bg.jpg" alt="" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="w-full max-w-xl">
          <h3 className="text-3xl text-center mb-4 xl:text-5xl">Praesent eu dolor eu orci vehicula euismod</h3>
          <p className="text-center text-sm mt-2 lg:mt-4">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar</p>
          <div className="flex text-sm justify-center mt-4 lg:mt-8">
            <Link href="/store" className="p-2 px-6 rounded-full ring-2 ring-white">
              See All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white md:flex lg:items-center lg:justify-center 2xl:max-w-1920 2xl:mx-auto">
      <div>
      <div className="md:relative md:-mt-16">
        <img className="md:w-56 md:h-80 w-full 2xl:w-full 2xl:height-full" src="/homepage/mobile_img.jpg" alt="" />
      </div>
      </div>
      <div className="text-black text-slate-500 md:w-96 mt-8 lg:mt-12 xl:ml-8 px-8">
        <p className="text-sm xl:text-xl">Praesent eu dolor eu orci</p>
        <h3 className="text-black mt-2 text-2xl">Praesent eu dolor eu orci vehicula euismod.</h3>
        <p className="text-black text-xs xl:text-md mt-2 leading-2">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar</p>
        <div className="mt-6 lg:mt-6 xl:mt-6 pb-3">
          <Link href="/store" className="text-sm xl:text-md text-white mb-2 p-2 px-6 bg-[#1E3708] rounded-full ring-2 ring-white">
            See All Books
          </Link>
        </div>
      </div>
    </div>
  </section>
</div>


    // <div className="">
    //   <section>
    //     <div>
    //       <img className="h-[65vh] relative object-cover" src="/homepage/hero_bg.jpg" alt="" />
    //       <div className="absolute w-[100%] -mt-96">
    //       <h3 className="text-3xl text-center">Praesent eu dolor eu orci vehicula euismod</h3>
    //       <p className="text-center text-sm mt-8">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
    //       libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
    //       maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
    //       pulvinar</p>
    //       <div className="flex mt-8 justify-center">
    //     <Link href="/store" className="p-2 px-6 rounded-full ring-2 ring-white">
    //       See All Books
    //     </Link>
    //     </div>
    //       </div>
    //     </div>
    //     <div className="bg-white">
    //       <div className="text-center">
    //         <img className="pt-2" src="/homepage/mobile_img.jpg" alt="" />
    //       </div>
    //       <div className="text-black text-slate-500 mt-8 px-8">
    //       <p>Praesent eu dolor eu orci </p>
    //       <h3 className="text-black mt-4 text-2xl">Praesent eu dolor eu orci vehicula euismod. </h3>
    //       <p className="text-black text-sm mt-4">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar</p>
    //       <div className="mt-2 pb-3">
    //     <Link href="/store" className="text-white mb-2 p-2 px-6 bg-[#1E3708] rounded-full ring-2 ring-white">
    //       See All Books
    //     </Link>
    //     </div>
    //       </div>
    //     </div>
    //   </section>
      
    //   {/* <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-center small:items-center small:p-32">
    //     <h1 className="text-xl-semi mb-4 drop-shadow-md shadow-black text-[50px] font-semibold text-center leading-[50px]">
    //       Praesent eu dolor eu orci vehicula euismod.
    //     </h1>
    //     <p className="text-base-regular max-w-[50rem] mb-6 drop-shadow-md shadow-black text-center">
    //       Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
    //       libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
    //       maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
    //       pulvinar
    //     </p>
    //     <Link href="/store" className="p-4 px-16 rounded-full ring-2 ring-white">
    //       See All Books
    //     </Link>
    //   </div>
    //   <div className="h-full absolute">
    //     <Image
    //       src="/homepage/hero_bg.jpg"
    //       loading="eager"
    //       priority={true}
    //       quality={90}
    //       alt=""
    //       className="inset-0"
    //       draggable="false"
    //       sizes="100vw"
    //       fill
    //       style={{
    //         objectFit: "cover",
    //       }}
    //     />
    //   </div>
    //   <div className="relative items-center">
    //   <div className=" mx-auto absolute">
    //     <img className="-mt-28 w-64 h-96" src="/homepage/mobile_img.jpg" />
    //   </div>
    //   </div> */}
    // </div>
  )
}

export default Hero
