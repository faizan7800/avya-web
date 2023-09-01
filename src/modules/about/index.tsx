"use client"

const About = () => {
  return (
    <div className="w-[150%] lg:max-w-1920 lg:m-auto lg:mb-20 ">
      <div>
        <h5 className="my-8 text-4xl flex justify-center lg:flex lg:justify-center lg:text-6xl lg:my-10 ">
          Our Story
        </h5>

        <h6 className="mt-8 text-3xl font-bold text-center my-4 lg:flex lg:justify-center lg:mt-10 lg:text-4xl lg:my-4 lg:font-bold ">
          Building Stronger Bodies, Together: Discover FitnessTribe
        </h6>

        <p className="mx-4 mt-8 lg:mt-16 lg:mb-20 lg:mx-7">
          Welcome to FitnessTribe, your premier destination for fitness coaching
          and community support. At FitnessTribe, we believe that fitness is not
          just an individual pursuit but a collective journey. Our mission is to
          build stronger bodies, both physically and mentally, by fostering a
          sense of camaraderie, support, and empowerment within our tribe. With
          a team of dedicated coaches and a vibrant community of fitness
          enthusiasts, we provide personalized coaching, innovative workouts,
          and a positive environment to help you reach your fitness goals. Join
          FitnessTribe and become part of a powerful movement that inspires,
          motivates, and transforms lives. Together, we'll forge a path to a
          healthier, stronger, and more vibrant you.
        </p>
      </div>

      <div className="mt-16 flex flex-col-reverse mx-4 lg:flex lg:flex-row lg:mt-0 lg:space-x-24 lg:my-36 ">
        <div className="w-full lg:w-3/6 lg:mx-7">
          <p className="my-4 text-3xl lg:text-[40px] lg:leading-none lg:my-4">
            Empowering Individuals to Thrive Through Fitness: The FitnessTribe
            Commitment
          </p>
          <p>
            At FitnessTribe, our mission is to empower individuals to thrive
            through fitness. We are committed to providing a supportive and
            inclusive environment where everyone feels welcome and supported on
            their fitness journey. Our aim is to inspire and guide individuals
            to reach their full potential, both physically and mentally, by
            offering personalized coaching, innovative workouts, and a strong
            sense of community. We believe that fitness is not just about
            achieving external goals, but also about cultivating inner strength,
            confidence, and overall well-being. Through our dedicated coaches
            and vibrant tribe, we strive to ignite the fire within each
            individual, enabling them to overcome challenges, push their limits,
            and create a sustainable and fulfilling fitness lifestyle. Together,
            we'll create a lasting impact and help individuals transform their
            lives through the power of fitness.
          </p>
        </div>

        <div className="w-full lg:w-3/6">
          <img
            src="/about/about.jpg"
            alt="about image"
            width={661}
            height={428}
          />
        </div>
      </div>

      <div>
        <p className="text-2xl text-center mx-4 mt-16 lg:text-3xl lg:text-center lg:mx-7 lg:mt-0 lg:my-4">
          I am the proud owner of FitnessTribe, and I can confidently say that
          this community has been a life-changer for countless individuals. As a
          fitness enthusiast myself, I wanted to create a space where people
          could come together, support one another, and experience the
          transformative power of fitness.
        </p>
      </div>

      <div className="mx-4 mt-20 lg:flex lg:space-x-10">
        <div className="text-center p-20 bg-[#2A2833] rounded-lg ">
          <p className="text-xl">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
            maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
            pulvinar
          </p>
          <p className="mt-10">Praesent eu dolor eu orc</p>
        </div>

        <div className="mb-10 mt-10 text-center p-20 bg-[#2A2833] rounded-lg lg:mb-0 lg:mt-0 ">
          <p className="text-xl">
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
            maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
            pulvinar
          </p>
          <p className="mt-10">Praesent eu dolor eu orc</p>
        </div>
      </div>
    </div>
  )
}

export default About
