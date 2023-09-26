import Image from "next/image"
import star from "../../../../../public/icon/Star.svg"

const HomeRating = () => {
  return (
    <>
      <div>
        <div className="py-4 md:py-16">
          <h1 className="text-black px-8 text-2xl md:text-center">
            Don't Take our Word for it
          </h1>
          <div className="md:flex md:justify-center mt-8">
          <div className="grid grid-col-1 mt-4 md:w-72">
            <div className="flex md:justify-center">
              <Image className="ml-8" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
            </div>
            <h1 className="text-black text-md text-lg ml-8 mt-4 md:text-center">
              Praesent eu dolor eu orci vehicula euismod.
            </h1>
            <p className="text-black text-sm text-slate-500 ml-8 mt-1 md:text-center">
              Praesent eu dolor eu
            </p>
          </div>
          <div className="grid grid-col-1 mt-4 md:w-72">
            <div className="flex md:justify-center">
              <Image className="ml-8" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
            </div>
            <h1 className="text-md text-black text-lg ml-8 mt-4 md:text-center">
              Praesent eu dolor eu orci vehicula euismod.
            </h1>
            <p className="text-black text-sm text-slate-500 ml-8 mt-1 md:text-center">
              Praesent eu dolor eu
            </p>
          </div>
          <div className="grid grid-col-1 my-4 md:w-72">
            <div className="flex md:justify-center">
              <Image className="ml-8" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
              <Image className="ml-4" src={star} alt="" />
            </div>
            <h1 className="text-md text-black text-lg ml-8 mt-4 md:text-center">
              Praesent eu dolor eu orci vehicula euismod.
            </h1>
            <p className="text-black text-sm text-slate-500 ml-8 mt-1 md:text-center">
              Praesent eu dolor eu
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeRating
