import Image from "next/image"


const FeaturedClasses = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 justify-items-center items-center mt-8 bg-white text-white">
        <h1 className=" text-black text-2xl font-semibold 2xl:text-4xl md:py-4">Featured Classes</h1>
        <div className=" lg:flex lg:gap-7 lg:mx-12 xl:mx-32 md-justify-center 2xl:justify-center 2xl:max-w-1920 2xl:mx-auto">
        <div className="px-4 py-4 bg-gray-100 text-center ">
          <Image src="/homepage/stock_img1.jpg" height={250} width={250} alt="stoke1" />
          <div className="text-black mt-2">Master Your Mind</div>
          <div className="text-xs text-black mt-2">Duration</div>
          <div className="text-xs text-black mt-2">$2.70</div>
          <div className="text-black mt-2"><button className="text-xs h-9 w-auto px-3 text-white semi-bold bg-[#1E3708] ring-transparent rounded-full ring-2">See all books </button></div>
        </div>
        <div className="px-4 py-4 bg-gray-100 text-center">
          <Image src="/homepage/stock_img2.jpg" height={250} width={250} alt="stoke2" />
          <div className="text-black mt-2">HabitBoost</div>
          <div className="text-xs text-black mt-2">Duration</div>
          <div className="text-xs text-black mt-2">$2.70</div>
          <div className="text-black mt-2"><button className="text-xs h-9 w-auto px-3 text-white semi-bold bg-[#1E3708] ring-transparent rounded-full ring-2">See all books </button></div>
        </div>
        <div className="px-4 py-4 bg-gray-100 text-center">
          <Image src="/homepage/stock_img3.jpg" height={250} width={250} alt="stoke3" />
          <div className="text-black mt-2">Navigating Change</div>
          <div className="text-xs text-black mt-2">Duration</div>
          <div className="text-xs text-black mt-2">$2.70</div>
          <div className=" mt-2"><button className="text-xs  h-9 w-auto px-3 text-white semi-bold bg-[#1E3708] ring-transparent rounded-full ring-2">See all books </button></div>
        </div>
        <div className="px-4 py-4 bg-gray-100 text-center">
          <Image src="/homepage/stock_img1.jpg" height={250} width={250} alt="stoke4" />
          <div className="text-black mt-2">Finding Balance</div>
          <div className="text-xs text-black mt-2">Duration</div>
          <div className="text-xs text-black mt-2">$2.70</div>
          <div className=" mt-2"><button className="text-xs h-9 w-auto px-3 text-white semi-bold bg-[#1E3708] ring-transparent rounded-full ring-2">See all books </button></div>
        </div>
        </div>
      </div>
    </>
  )
}
export default FeaturedClasses
