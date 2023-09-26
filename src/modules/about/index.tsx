"use client"

import Link from "next/link"

const About = () => {
  return (
    <>
    <div className="bg-white">
      <div className="bg-[#173300] md:h-44 lg:h-60">
        <h1 className=" text-white font-bold text-4xl md:py-16 lg:py-20 text-center">
          Our Story
        </h1>
      </div>
      <div className="bg-white lg:justify-center">
        <div className="flex justify-center">
        <img
          className="h-96 object-cover lg:-mt-20 lg:w-[56rem] 2xl:w-[70rem] lg:h-96 lg:absolute lg:mx-16 xl:mx-44 2xl:mx-[30rem]"
          src="/about/story_img.jpg"
          alt=""
        />
        </div>
        <div className="mx-8 lg:mx-12 lg:pt-48 lg:pb-8 xl:px-32 xl:pt-80">
          <h2 className="text-black text-2xl mt-10 lg:text-center 2xl:text-4xl">
            About FitJunction: Empowering Your Fitness Journey with Expert
            Guidance
          </h2>
          <p className="text-black text-sm mt-4 xl:mt-8 lg:text-center 2xl:text-xl 2xl:max-w-1920 2xl:m-auto">
            At FitJunction, we are passionate about transforming lives through
            fitness. Our mission is to provide individuals of all fitness levels
            with the tools, knowledge, and support necessary to embark on a
            successful and fulfilling fitness journey. With a team of
            experienced trainers, nutritionists, and wellness experts, we offer
            a comprehensive range of resources and programs designed to help you
            achieve your health and fitness goals.
          </p>
          <p className="text-black text-sm mt-4 lg:text-center 2xl:text-xl 2xl:max-w-1920 2xl:m-auto">
            At FitJunction, we believe that fitness is not just about physical
            strength but also encompasses mental well-being and overall
            vitality. We strive to create a supportive and inclusive community
            where individuals can come together to learn, grow, and inspire each
            other. Whether you are a beginner looking to kickstart your fitness
            routine or an experienced athlete aiming to reach new heights,
            FitJunction provides a diverse range of expert-led workouts,
            nutrition plans, and educational content to cater to your specific
            needs.
          </p>
        </div>
      </div>
      
        
        
        
          </div>
    </>
  )
}

export default About
