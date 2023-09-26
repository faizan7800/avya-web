import Link from "next/link"

const Blog = () => {
  return (
    // <>
      <div
        className=" text-black bg-white pb-6 font-poppins
             w-[100%] h-auto grid justify-items-center "
      >
        <div className="text-2xl text-center py-2 h-28 w-[100%] flex font-poppins justify-center bg-[#F9F9F9] lg:text-[40px] lg:py-10">
          Downlaod
        </div>
        <h1 className=" text-3xl text-center h-10 w-[100%] grid justify-items-center mt-4 items-center font-poppins ">
          See our Latest Blog
        </h1>
        <div className="grid grid-col-1  gap-4 p-2 md:grid-cols-2 justify-items-center items-center md:w-[70%] ">
          <div className="mt-2">
            <Link href="blog1">
              <img
                src="blog/blog_img1.jpg"
                height={307}
                width={706}
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
                src="blog/blog_img2.jpg"
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
    // </>
  )
}
export default Blog
