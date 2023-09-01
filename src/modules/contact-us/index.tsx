"use client"

const ContactUs = () => {
  return (
    <div className="flex-col lg:flex lg:flex-row ">
      <div className="lg:w-6/12">
        <img
          src="/contact-us/contact_us.jpg"
          alt="contact us "
          width={960}
          height={869}
        />
      </div>

      <div className="mt-4 lg:mt-0 flex justify-center text-center lg:w-6/12 lg:p-10 ">
        <div className="w-4/5 m-auto lg:w-[70%] ">
          <h5 className="text-2xl lg:text-[40px]">Send us an Email</h5>
          <p className="mt-2">
            If you have any queries, please contact The Coaching Library.
          </p>
          <form
            className="mt-8 mb-8 lg:mb-0 flex flex-col space-y-10 "
            action=""
          >
            <input
              className="p-2 lg:p-4 border-2 bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 lg:p-4 border-2 bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-2 lg:p-4 border-2 bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Reason of Contact"
            />
            <input
              className="p-2 lg:p-4 border-2 bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="p-2 pb-20 lg:p-4 lg:pb-20 border-2 bg-transparent text-white placeholder:text-white"
              type="text"
              placeholder="Message"
            />
            <button className="border-0 text-xl bg-transparent text-white placeholder:text-white">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
