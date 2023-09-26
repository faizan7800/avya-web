"use client"

const ContactUs = () => {
  return (
    <>
    <div className="bg-white">
    <div className="text-black text-2xl py-2 flex justify-center  bg-[#FBF2EB] lg:text-[40px] lg:py-10 ">
        Refund Policy
      </div>
    <div className="bg-white flex justify-center">
      

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
            <div className="flex justify-between">
            <input
              className="p-2 lg:w-96 lg:p-4 border-2 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 lg:p-4 lg:w-96 border-2 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Email"
            />
            </div>
            <div className="flex justify-between">
            <input
              className="p-2 lg:p-4 border-2 lg:w-96 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Reason of Contact"
            />
            <input
              className="p-2 lg:p-4 border-2 lg:w-96 border-[#AFAFAF] bg-transparent text-black placeholder:text-black"
              type="text"
              placeholder="Phone number"
            />
            </div>
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
      </div>
      </>
  )
}

export default ContactUs
