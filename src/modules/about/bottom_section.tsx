import Link from "next/link"



const BottomSection = () => {
    return(
        <>
        <div className="px-12 lg:px-16 xl:px-44 2xl:text-xl bg-white pb-12 lg:my-16 lg:text-center 2xl:max-w-1920 2xl:mx-auto">
          <p className="text-black my-8 text-sm">
            We strive to educate and equip our members with the knowledge and
            tools they need to make informed choices about their fitness
            journey. Through innovative training programs, personalized
            nutrition plans, and evidence-based practices, we aim to empower
            individuals to adopt sustainable habits and develop a positive
            relationship with their bodies.
          </p>
          <p className="text-black mt-4 text-sm 2xl:max-w-1920 2xl:mx-auto">
            Our mission extends beyond physical fitness, recognizing the
            importance of mental and emotional well-being. We encourage our
            members to cultivate self-care practices, embrace self-acceptance,
            and foster a sense of balance in all aspects of their lives.
          </p>
        </div>
        <div className="bg-[#F9F9F9] lg:flex lg:mx-8 lg:justify-center">
        <img className=" md:w-full lg:h-96 lg:w-80 lg:order-1 xl:w-96 xl:h-[30rem]" src="/about/story_img3.jpg" alt="" />

        <div className="text-black text-slate-500 py-8 px-8 lg:w-96 lg:mr-24 lg:mt-16">
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
              className="text-white mb-2 p-2 px-6 bg-[#1E3708] rounded-full ring-2 ring-white"
            >
              See All Books
            </Link>
          </div>
        </div>
        </div>
        </>
    )
    }
    export default BottomSection