import Link from "next/link"

const Blog = () => {
  return (
    <>
    <div className="">
      <div className="">
    <div className="text-black text-2xl py-2 flex justify-center  bg-[#EEF7F2] lg:text-[40px] lg:py-10 ">
        Download
      </div>
      <div
        className="w-full bg-white text-black bg-white pb-6 lg:py-16 font-poppins
            2xl:max-w-1920 2xl:mx-auto h-auto grid justify-items-center ">
        <div className="text-black text-center text-2xl py-2 lg:text-[40px] lg:py-10 ">
        See our Latest Blog
      </div>
        <div className="grid grid-col-1  gap-4 p-2 md:grid-cols-2 justify-items-center items-center md:w-[70%] ">
          <div className="mt-2">
            <Link href="blog1">
              <img
                src="blog/blog_231.jpg"
                
                alt="stoke1"
              />
            </Link>
            <p className="mt-3">
            Unlocking the Power of Consistency: A Key to Fitness Success
            </p>
            <p className="text-xs text-[#ABABAB]">2/3/23</p>
          </div>
          <div className="mt-2">
            <Link href="blog2">
              <img
                src="blog/blog2_231.jpg"
                height={307}
                width={706}
                alt="stoke2"
              />
            </Link>
            <p className=" mt-3">
            The Mind-Body Connection: Nurturing Wellness from Within
            </p>
            <p className="text-xs text-[#ABABAB]">2/3/23</p>
          </div>
        </div>
      </div>
      </div>
      </div>
     </> 
  )
}
export default Blog
