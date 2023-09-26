import Link from "next/link"



const SecondHero = () => {
  return (
    <>
      <div>
      <div className="bg-white md:mt-16 md:flex md:justify-center md:gap-12">
          <div className="text-center order-1">
            <img className="md:w-[22rem] md:h-[28rem] w-full" src="/homepage/hero2_img.jpg" alt="" />
          </div>
          <div className="md:w-96 text-black text-slate-500 my-10 px-8 md:my-6">
          <p>Praesent eu dolor eu orci </p>
          <h3 className="text-black mt-4 text-2xl">Praesent eu dolor eu orci vehicula euismod. </h3>
          <p className="text-black text-sm mt-4">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar</p>
          <div className="mt-6 pb-3">
        <Link href="/store" className="text-white mb-2 p-2 px-6 bg-[#1E3708] rounded-full ring-2 ring-white">
          See All Books
        </Link>
        </div>
          </div>
        </div>
      <div className="bg-white md:flex md:justify-center md:gap-12">
          <div className="text-center">
            <img className="pt-2 md:-mt-16 md:w-[22rem] md:h-[28rem] w-full" src="/homepage/hero2_img2.jpg" alt="" />
          </div>
          <div className="md:mt-16 md:w-96 text-black text-slate-500 my-8 px-8">
          <p>Praesent eu dolor eu orci </p>
          <h3 className="text-black mt-4 text-2xl">Praesent eu dolor eu orci vehicula euismod. </h3>
          <p className="text-black text-sm mt-4">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar</p>
          <div className="mt-2 md:mt-6 pb-3">
        <Link href="/store" className="text-white mb-2 p-2 px-6 bg-[#1E3708] rounded-full ring-2 ring-white">
          See All Books
        </Link>
        </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SecondHero
