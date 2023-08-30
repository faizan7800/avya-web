import Image from "next/image"

const Services = () => {
  return (
    <div className="pt-24 bg-services-bg text-white">
      <div className="pb-24 max-w-1920 m-auto flex flex-row justify-around space-x-20">
        <div className="flex flex-col items-center justify-center flex-1 space-y-6">
          <Image
            src="/homepage/bitcoin_one.png"
            alt="bitcoin one"
            width={83}
            height={83}
          />
          <h3 className="text-2xl text-center text-white">
            Praesent eu dolor eu o
          </h3>
          <p className="text-base text-center text-white">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-6">
          <Image
            src="/homepage/bitcoin_two.png"
            alt="bitcoin one"
            width={83}
            height={83}
          />
          <h3 className="text-2xl text-center text-white">
            Praesent eu dolor eu o
          </h3>
          <p className="text-base text-center text-white">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-6">
          <Image
            src="/homepage/bitcoin_three.png"
            alt="bitcoin one"
            width={83}
            height={83}
          />
          <h3 className="text-2xl text-center text-white">
            Praesent eu dolor eu o
          </h3>
          <p className="text-base text-center text-white">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-6">
          <Image
            src="/homepage/bitcoin_four.png"
            alt="bitcoin one"
            width={83}
            height={83}
          />
          <h3 className="text-2xl text-center text-white">
            Praesent eu dolor eu o
          </h3>
          <p className="text-base text-center text-white">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit.
          </p>
        </div>
      </div>
      <div className="py-24 bg-main-bg">
        <div className="max-w-1920 m-auto flex flex-row justify-between space-x-48">
          <div className="flex-1">
            <Image
              src="/homepage/services.jpg"
              alt="services"
              width={603}
              height={799}
            />
          </div>
          <div className="flex flex-col justify-center flex-1 space-y-8">
            <h2 className=" text-6xl font-bold">
              Praesent eu dolor eu orci vehicula euismod.
            </h2>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex-none">
                <Image
                  src="/homepage/checkmark.png"
                  alt="checkmark"
                  width={42}
                  height={42}
                />
              </div>
              <div className=" flex-initial">
                <h3 className="text-xl font-bold">Easy of SLKj</h3>
                <p>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Su{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex-none">
                <Image
                  src="/homepage/checkmark.png"
                  alt="checkmark"
                  width={42}
                  height={42}
                />
              </div>
              <div className=" flex-initial">
                <h3 className="text-xl font-bold">Easy of SLKj</h3>
                <p>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Su{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex-none">
                <Image
                  src="/homepage/checkmark.png"
                  alt="checkmark"
                  width={42}
                  height={42}
                />
              </div>
              <div className=" flex-initial">
                <h3 className="text-xl font-bold">Easy of SLKj</h3>
                <p>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Su{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex-none">
                <Image
                  src="/homepage/checkmark.png"
                  alt="checkmark"
                  width={42}
                  height={42}
                />
              </div>
              <div className=" flex-initial">
                <h3 className="text-xl font-bold">Easy of SLKj</h3>
                <p>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Su{" "}
                </p>
              </div>
            </div>
            <div>
              <button className="py-6 px-16 rounded-full mt-8 bg-gradient-to-r from-button-primary to-[#17B9F7]">
                Join ICo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
