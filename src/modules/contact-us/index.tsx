"use client"

const ContactUs = () => {
  return (
    <>
    <div className="bg-white">
    <div className="flex-col lg:flex lg:flex-row bg-[#EEF7F2]">
      <div className="lg:w-6/12">
        <img
        className="xl:w-full"
          src="/contact-us/contact_231.jpg"
          alt="contact us "
          width={960}
          height={869}
        />
      </div>

      <div className="mt-4 lg:mt-0 flex justify-center text-center lg:w-6/12 lg:p-10 ">
        <div className="w-4/5 m-auto lg:w-[70%] ">
          <h5 className="text-black text-2xl lg:text-[40px]">Send us an Email</h5>
          <p className="text-black mt-2">
            If you have any queries, please contact The Coaching Library.
          </p>
          <form
            className="mt-8 mb-8 lg:mb-0 flex flex-col space-y-2 "
            action=""
          >
            <input
              className="p-2 lg:p-4 border-2 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 lg:p-4 border-2 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-2 lg:p-4 border-2 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Reason of Contact"
            />
            <input
              className="p-2 lg:p-4 border-2 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="p-2 pb-20 lg:p-4 lg:pb-20 border-2 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Message"
            />
            <button className="text-black border-0 text-xl bg-transparent text-black placeholder:text-black">
              Send Email
            </button>
          </form>
        </div>
      </div>
      <div>
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
      </>
  )
}

export default ContactUs
