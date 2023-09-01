"use client"

const FAQPage = () => {
  return (
    <div className="lg:max-w-1920 lg:m-auto">
      <div className="text-2xl py-2 font-bold flex justify-center lg:text-[40px] lg:py-10 ">
        Frequently Asked Questions
      </div>

      <div className=" mx-2 my-8 lg:space-y-4">
        <div className="p-8 border-2 border-white lg:w-3/5 lg:m-auto ">
          <p className="text-xl mb-4">
            How do I access the fitness videos on the site?
          </p>
          <p>
            To access the fitness videos, simply sign up for a membership on our
            site. Once you have registered, you can log in using your
            credentials and navigate to the video library, where you will find a
            wide range of workout videos to choose from.
          </p>
        </div>

        <div className="border-2 border-white lg:w-3/5 lg:m-auto p-8 my-4">
          <p className="text-xl mb-4">
            Can I stream the fitness videos on multiple devices?
          </p>
          <p>
            Yes, you can stream the fitness videos on multiple devices. Our site
            is compatible with various devices such as laptops, smartphones,
            tablets, and smart TVs. Simply log in to your account on any of
            these devices, and you'll have access to the entire video library.
          </p>
        </div>

        <div className="border-2 border-white lg:w-3/5 lg:m-auto p-8 my-4">
          <p className="text-xl mb-4">
            Are the fitness videos suitable for beginners?
          </p>
          <p>
            Absolutely! We understand that everyone has different fitness levels
            and goals. Our video library includes workouts suitable for
            beginners, intermediate, and advanced fitness enthusiasts. You can
            filter the videos based on your fitness level or choose from
            beginner-friendly programs designed to help you get started on your
            fitness journey.
          </p>
        </div>

        <div className="border-2 border-white lg:w-3/5 lg:m-auto p-8 my-4">
          <p className="text-xl mb-4">
            Can I download the fitness videos for offline viewing?
          </p>
          <p>
            Currently, our site does not support video downloads for offline
            viewing. However, you can stream the fitness videos online whenever
            you have an internet connection. This allows you the flexibility to
            access your workouts anytime and anywhere.
          </p>
        </div>

        <div className="border-2 border-white lg:w-3/5 lg:m-auto p-8 my-4 mb-20">
          <p className="text-xl mb-4">
            Are there different workout durations available, such as shorter or
            longer sessions?
          </p>
          <p>
            Yes, we offer a variety of workout durations to cater to different
            schedules and preferences. Our video library includes workouts
            ranging from quick 10-minute sessions for those with limited time to
            longer, more comprehensive workouts for those who prefer more
            intense training. You can choose the duration that suits your needs
            and fits seamlessly into your daily routine.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
