"use client"

import Link from "next/link"

const About = () => {
  return (
    <>
      <div className="bg-white text-black">
        <section className="bg-[#FBF2EB]">
          <div className="lg:flex lg:ml-20 lg:items-center lg:justify-between ">
            <h1 className="text-4xl text-center font-bold py-8 lg:text-6xl 2xl:max-w-1920 2xl:m-auto">
              {" "}
              Our Story
            </h1>
            <div className="flex justify-center lg:mt-20">
              <img className="w-3/6" src="/about/about_one.jpg" alt="" />
              <img
                className="h-10 mt-5 ml-[-3rem] lg:h-28 lg:w-full 2xl:h-48"
                src="/about/about_hero.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-4 my-10 lg:text-center lg:mx-20 lg:my-20 2xl:max-w-1920 2xl:m-auto 2xl:my-40">
            <h1 className="text-2xl lg:text-4xl 2xl:text-5xl">
              About FitnessMoments: Empower. Embrace. Thrive.
            </h1>
            <p className="mt-5">
              Welcome to FitnessMoments, your partner in prioritizing your
              health, well-being, and fitness goals. Our mission is to empower
              you to unlock your full potential, embrace your strength, and
              thrive in all areas of life. With personalized guidance and a
              supportive community, we're here to help you achieve lasting
              wellness. Join us on this transformative journey of growth and
              empowerment with FitnessMoments.
            </p>
          </div>
        </section>

        <section className="">
          <div className="lg:flex lg:items-center lg:mx-20 2xl:max-w-1920 2xl:m-auto">
            <div className="lg:basis-2/4	">
              <img src="/about/about_two.jpg" alt="" />
            </div>
            <div className="mx-4 my-10 lg:basis-2/4">
              <div className="lg:w-4/5 lg:m-auto">
                <h1 className="text-2xl lg:lg:text-4xl 2xl:text-5xl">
                  Praesent eu dolor eu orci vehicula euismod.{" "}
                </h1>
                <p className="my-5 2xl:my-10">
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Suspendisse maximus dolor quis consequat volutpat.
                  Donec vehicula elit eu erat pulvinar, vel congue ex egestas.
                  Praesent egestas purus dolor, a porta arcu pharetra quis. Sed
                  vestibulum semper ligula, id accumsan orci ornare ut. Donec id
                  pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam
                  mattis, velit in malesuada maximus, erat ligula eleifend eros,
                  et lacinia nunc ante vel odio.
                </p>
                <button className="bg-[#292929] py-2 px-6 text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:flex lg:items-center lg:my-20 bg-[#E7C484]">
            <div className="lg:basis-2/4 2xl:basis-2/4">
              <img className="lg:w-full" src="/about/about_three.jpg" alt="" />
            </div>
            <div className="text-white px-4 py-10 lg:lg:basis-2/4 2xl:basis-2/4  ">
              <div className="lg:w-4/5 lg:m-auto">
                <h1 className="text-2xl lg:text-4xl 2xl:text-5xl">
                  Unlock Your Inner Strength: Mindset Matters
                </h1>
                <p className="my-5 2xl:my-10">
                  Your mindset is a powerful tool that can make or break your
                  fitness journey. In this section, we explore the importance of
                  cultivating a positive and resilient mindset. Discover how
                  shifting your perspective, embracing self-belief, and
                  practicing mindfulness can help you overcome obstacles, stay
                  motivated, and unleash your true potential. Let us help you
                  harness the power of a strong mindset to achieve remarkable
                  results.
                </p>
                <button className="bg-[#292929] py-2 px-6 text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:my-20 lg:mx-20 lg:flex lg:justify-between lg:items-center 2xl:max-w-1920 2xl:m-auto">
            <div className="mx-4 my-10 lg:basis-2/4 lg:pt-20 lg:mr-20">
              <h1 className="text-2xl lg:text-4xl">
                Praesent eu dolor eu orci vehicula euismod.{" "}
              </h1>
              <p className="my-5 2xl:my-10">
                Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                sollicitudin libero, vel malesuada velit. Nullam et maximus
                lorem. Suspendisse maximus dolor quis consequat volutpat. Donec
                vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent
                egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum
                semper ligula, id accumsan orci ornare ut. Donec id pharetra
                nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Aliquam
                dapibus nisl at diam scelerisque luctus. Nam mattis, velit in
                malesuada maximus, erat ligula eleifend eros, et lacinia nunc
                ante vel odio.
              </p>
              <button className="bg-[#292929] py-2 px-6 text-white">
                Read More
              </button>
            </div>

            <div className="my-10 lg:basis-2/4">
              <div className="mx-4">
                <img src="/about/about_four.jpg" alt="" />
                <p className="my-5">
                  Duis mauris augue, efficitur eu arcu sit amet, posuere
                  dignissim neque. Aenean enim sem, pharetra et magna sit amet,
                  luctus aliquet nibh. Curabitur auctor leo et libero
                  consectetur gravida. Morbi gravida et sem dictum{" "}
                </p>
                <div className="my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="180"
                    height="20"
                    viewBox="0 0 180 20"
                  >
                    <defs>
                      <clipPath id="clipPath">
                        <rect width="180" height="20" fill="none" />
                      </clipPath>
                      <pattern
                        id="pattern"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512 512"
                      >
                        <image
                          width="512"
                          height="512"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </pattern>
                    </defs>
                    c
                    <g
                      id="Repeat_Grid_4"
                      data-name="Repeat Grid 4"
                      clipPath="url(#clipPath)"
                    >
                      <g transform="translate(19898 13936)">
                        <rect
                          id="Start"
                          width="20"
                          height="20"
                          transform="translate(-19898 -13936)"
                          fill="url(#pattern)"
                        />
                      </g>
                      <g transform="translate(19938 13936)">
                        <rect
                          id="Start-2"
                          data-name="Start"
                          width="20"
                          height="20"
                          transform="translate(-19898 -13936)"
                          fill="url(#pattern)"
                        />
                      </g>
                      <g transform="translate(19978 13936)">
                        <rect
                          id="Start-3"
                          data-name="Start"
                          width="20"
                          height="20"
                          transform="translate(-19898 -13936)"
                          fill="url(#pattern)"
                        />
                      </g>
                      <g transform="translate(20018 13936)">
                        <rect
                          id="Start-4"
                          data-name="Start"
                          width="20"
                          height="20"
                          transform="translate(-19898 -13936)"
                          fill="url(#pattern)"
                        />
                      </g>
                      <g transform="translate(20058 13936)">
                        <rect
                          id="Start-5"
                          data-name="Start"
                          width="20"
                          height="20"
                          transform="translate(-19898 -13936)"
                          fill="url(#pattern)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="text-sm">Emma, USA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
