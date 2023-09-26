import Link from "next/link"



const Bitcoin = () => {
return(
    <>
    <div className="bg-[#EDEFEC]">
      <div className="lg:flex lg:mx-8 lg:justify-center">
        <img className="mt-16 w-full lg:h-96 lg:w-72 xl:w-96 xl:h-[30rem]" src="/about/story_img2.jpg" alt="" />

        <div className="text-black text-slate-500 my-8 px-8 lg:w-96 lg:ml-24 xl:ml-44 lg:mt-32">
          <p className="xl:text-sm text-xs">Praesent eu dolor eu orci </p>
          <h3 className="text-black text-md mt-4 text-2xl xl:text-2xl">
            Praesent eu dolor eu orci vehicula euismod.{" "}
          </h3>
          <p className="text-black text-xs mt-4 xl:text-sm">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
            maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
            pulvinar
          </p>
          <div className="mt-6 pb-3">
            <Link
              href="/store"
              className="text-sm text-white mb-2 p-2 px-6 xl:px-10 bg-[#1E3708] rounded-full ring-2 ring-white"
            >
              See All Books
            </Link>
          </div>
        </div>
        </div>
    <div className="mx-8 lg:mx-16 2xl:mx-32 py-16 xl:mx-24">
        <h1 className="text-black text-2xl lg:text-center 2xl:text-3xl">
          Praesent eu dolor eu orci vehicula euismod.{" "}
        </h1>
        <div className=" lg:flex lg:justify-evenly lg:mx-auto 2xl:mx-96 2xl:my-12 2xl:max-w-1920 2xl:mx-auto">
        <div className="bg-white w-64 rounded-2xl mt-4">
          <div className="pt-8">
            <img className=" ml-8 w-16 h-16" src="/about/bitcoin.jpg" alt="" />
          </div>
          <p className="text-black px-8 pt-4 pb-8 text-sm">
            Praesent eu dolor eu orci vehicula euismod.{" "}
          </p>
        </div>
        <div className="bg-white w-64 rounded-2xl mt-4">
          <div className="pt-8">
            <img
              className=" ml-8 w-16 h-16"
              src="/about/bitcoin_1.jpg"
              alt=""
            />
          </div>
          <p className="text-black px-8 pt-4 pb-8 text-sm">
            Praesent eu dolor eu orci vehicula euismod.{" "}
          </p>
        </div>
        <div className="bg-white w-64 rounded-2xl mt-4">
          <div className="pt-8">
            <img
              className=" ml-8 w-16 h-16"
              src="/about/bitcoin_2.jpg"
              alt=""
            />
          </div>
          <p className="text-black px-8 pt-4 pb-8 text-sm">
            Praesent eu dolor eu orci vehicula euismod.{" "}
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
)
}
export default Bitcoin