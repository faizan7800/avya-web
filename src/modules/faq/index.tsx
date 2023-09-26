"use client"

const FAQPage = () => {
  return (
    <div className=" bg-white">
      <div className=" bg-[#F9F9F9] text-black text-2xl py-2 font-bold flex justify-center lg:text-[40px] lg:py-10 ">
        Frequently Asked Questions
      </div>
<div className="lg:max-w-1920 lg:m-auto">
      <div className=" mx-2 py-8 lg:space-y-4">
        <div className="p-8 border-2 border-[#AFAFAF] lg:w-3/5 lg:m-auto ">
          <p className="text-black text-xl mb-4">
            How do I access the fitness videos on the site?
          </p>
          <p className="text-black">
            To access the fitness videos, simply sign up for a membership on our
            site. Once you have registered, you can log in using your
            credentials and navigate to the video library, where you will find a
            wide range of workout videos to choose from.
          </p>
        </div>

        <div className="border-2 border-[#AFAFAF] lg:w-3/5 lg:m-auto p-8 my-4">
          <p className="text-black text-xl mb-4">
            Can I stream the fitness videos on multiple devices?
          </p>
          <p className="text-black">
            Yes, you can stream the fitness videos on multiple devices. Our site
            is compatible with various devices such as laptops, smartphones,
            tablets, and smart TVs. Simply log in to your account on any of
            these devices, and you'll have access to the entire video library.
          </p>
        </div>

        <div className="border-2 border-[#AFAFAF] lg:w-3/5 lg:m-auto p-8 my-4">
          <p className="text-xl mb-4 text-black">
            Are the fitness videos suitable for beginners?
          </p>
          <p className="text-black">
            Absolutely! We understand that everyone has different fitness levels
            and goals. Our video library includes workouts suitable for
            beginners, intermediate, and advanced fitness enthusiasts. You can
            filter the videos based on your fitness level or choose from
            beginner-friendly programs designed to help you get started on your
            fitness journey.
          </p>
        </div>

        <div className="border-2 border-[#AFAFAF] lg:w-3/5 lg:m-auto p-8 my-4 text-black">
          <p className="text-xl mb-4">
            Can I download the fitness videos for offline viewing?
          </p>
          <p className="text-black">
            Currently, our site does not support video downloads for offline
            viewing. However, you can stream the fitness videos online whenever
            you have an internet connection. This allows you the flexibility to
            access your workouts anytime and anywhere.
          </p>
        </div>

        <div className="border-2 border-[#AFAFAF] lg:w-3/5 lg:m-auto p-8 pb-20">
          <p className="text-xl mb-4 text-black">
            Are there different workout durations available, such as shorter or
            longer sessions?
          </p>
          <p className="text-black">
            Yes, we offer a variety of workout durations to cater to different
            schedules and preferences. Our video library includes workouts
            ranging from quick 10-minute sessions for those with limited time to
            longer, more comprehensive workouts for those who prefer more
            intense training. You can choose the duration that suits your needs
            and fits seamlessly into your daily routine.
          </p>
        </div>
      </div>
      <div className="lg:flex lg:justify-center bg-white xl:py-16">
      <div className="mx-8 xl:mx-16 flex lg:flex-none justify-center space-x-12 lg:space-x-24">
        <div className="">
        <img className="h-16 w-16" src="/contact-us/support.jpg" alt="" />
        <p className="text-black">24/7 Support</p>
        </div>
        <div className=" xl:ml-8">
        <img className="h-16 w-16" src="/contact-us/fast.jpg" alt="" />
        <p className="text-black">Fast Downlaods</p>
        </div>
      </div>
      <div className="mx-8 xl:mx-16 flex lg:flex-none justify-center space-x-12 mt-8 pb-8 lg:mt-0 lg:space-x-24">
        <div className="">
        <img className="h-16 w-16" src="/contact-us/return.jpg" alt="" />
        <p className="text-black">Easy Returns</p>
        </div>
        <div className=" xl:ml-8">
        <img className="h-16 w-16" src="/contact-us/security.jpg" alt="" />
        <p className="text-black">Secure Payment</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default FAQPage
