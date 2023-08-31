"use client"

const About = () => {
    return <div className="max-w-1920 m-auto">

        <div>
            <h5 className="flex justify-center text-6xl my-10">Our Story</h5>
            <h6 className="flex justify-center text-4xl my-4 font-bold ">Building Stronger Bodies, Together: Discover FitnessTribe</h6>
            <p className="mx-7">Welcome to FitnessTribe, your premier destination for fitness coaching and community support. At FitnessTribe, we believe that fitness is not just an individual pursuit but a collective journey. Our mission is to build stronger bodies, both physically and mentally, by fostering a sense of camaraderie, support, and empowerment within our tribe. With a team of dedicated coaches and a vibrant community of fitness enthusiasts, we provide personalized coaching, innovative workouts, and a positive environment to help you reach your fitness goals. Join FitnessTribe and become part of a powerful movement that inspires, motivates, and transforms lives. Together, we'll forge a path to a healthier, stronger, and more vibrant you.</p>
        </div>


        <div className="flex space-x-24 my-36 ">
            <div className="w-3/6 mx-7">
                <p className="text-[40px] leading-none my-4">Empowering Individuals to Thrive Through Fitness: The FitnessTribe Commitment</p>
                <p>At FitnessTribe, our mission is to empower individuals to thrive through fitness. We are committed to providing a supportive and inclusive environment where everyone feels welcome and supported on their fitness journey. Our aim is to inspire and guide individuals to reach their full potential, both physically and mentally, by offering personalized coaching, innovative workouts, and a strong sense of community. We believe that fitness is not just about achieving external goals, but also about cultivating inner strength, confidence, and overall well-being. Through our dedicated coaches and vibrant tribe, we strive to ignite the fire within each individual, enabling them to overcome challenges, push their limits, and create a sustainable and fulfilling fitness lifestyle. Together, we'll create a lasting impact and help individuals transform their lives through the power of fitness.</p>
            </div>

            <div className="w-3/6">
                <img src="/about/about.jpg" alt="about image" width={661} height={428} />
            </div>
        </div>

        <div>
            <p className="text-3xl text-center mx-7">I am the proud owner of FitnessTribe, and I can confidently say that this community has been a life-changer for countless individuals. As a fitness enthusiast myself, I wanted to create a space where people could come together, support one another, and experience the transformative power of fitness.</p>
        </div>


        <div className="flex space-x-10 mt-20">

            <div className="bg-[#2A2833] rounded-lg p-20 text-center">
                <p className="text-xl">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar</p>
                <p className="mt-10">Praesent eu dolor eu orc</p>
            </div>

            <div className="bg-[#2A2833] rounded-lg p-20 text-center ">
                <p className="text-xl">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar</p>
                <p className=" mt-10">Praesent eu dolor eu orc</p>
            </div>

        </div>



    </div>

}

export default About
