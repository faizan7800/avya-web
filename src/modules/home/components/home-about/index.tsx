import Image from "next/image"

const HomeAbout = () => {
  return (
    <div className="flex flex-row justify-start max-w-1920 m-auto space-x-32">
      <h5 className=" text-4xl w-1/3">
        Praesent eu dolor eu orci vehicula euismod. Vivamus
      </h5>
      <div className="flex flex-col w-2/3 space-y-8">
        <p className=" w-3/4">
          Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
          libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse
          maximus dolor quis consequat volutpat. Donec vehicula elit eu erat
          pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta
          arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci
          ornare ut. Donec id pharetr
        </p>
        <div className="flex flex-row space-x-8">
          <Image
            src="/homepage/home_about_one.jpg"
            alt="Home About"
            width={419}
            height={484}
          />
          <Image
            src="/homepage/home_about_two.jpg"
            alt="Home About"
            width={419}
            height={484}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
