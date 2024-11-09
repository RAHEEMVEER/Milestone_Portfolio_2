import Image from "next/image";
import myPic from "../../public/images/my-pic.png";

export default function Home() {
  return (
    <section
      className="bg-background1 w-full  max-h-max flex justify-between flex-col lg:flex-row px-5 md:px-12 lg:px-32 py-12 lg:py-24"
      style={{ minHeight: "calc(100vh - 80px)" }}
      id="Home"
    >
      {/* Text Section */}
      <div className="mt-10 lg:mt-20 w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-3xl sm:text-4xl font-bold text-textColor mb-2">
          Hey it's Me
        </h3>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textColor mb-2">
          Abdul Raheem
        </h1>
        <h3 className="text-3xl sm:text-4xl font-bold text-textColor mb-3">
          And I'm a Web Developer
        </h3>
        <p className="text-lg text-textColor mb-5">
          Creative Front-End Developer Crafting Engaging User Experiences with Modern Web Technologies.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mb-6">
          <a
            href="#"
            className="w-12 h-12 border-2 rounded-full flex justify-center items-center hover:bg-mainColor hover:shadow-custom hover:border-mainColor"
          >
            <i className="bx bxl-facebook text-3xl text-mainColor hover:text-background1"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 border-2 rounded-full flex justify-center items-center hover:bg-mainColor hover:shadow-custom hover:border-mainColor"
          >
            <i className="bx bxl-instagram text-3xl text-mainColor hover:text-background1"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 border-2 rounded-full flex justify-center items-center hover:bg-mainColor hover:shadow-custom hover:border-mainColor"
          >
            <i className="bx bxl-linkedin text-3xl text-mainColor hover:text-background1"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 border-2 rounded-full flex justify-center items-center hover:bg-mainColor hover:shadow-custom hover:border-mainColor"
          >
            <i className="bx bxl-telegram text-3xl text-mainColor hover:text-background1"></i>
          </a>
        </div>

        {/* Hire Me Button */}
        <div className="flex justify-center lg:justify-start">
          <a href="#Contact" className="flex items-center justify-center h-11 w-36 bg-mainColor rounded-lg text-2xl text-background2 transition duration-500 hover:shadow-custom">
            Hire Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
        <Image
          src={myPic}
          alt="Author Pic"
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-mainColor rounded-full shadow-custom"
        />
      </div>
    </section>
  );
}
