import Image from "next/image";
import myPic from "../../public/images/my-pic.png";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col-reverse lg:flex-row items-center justify-between w-full bg-background1 px-5 md:px-12 lg:px-28 py-12 lg:py-24"
      style={{ minHeight: "calc(100vh - 80px)", maxHeight:"max-content" }}
    >
      <div className="w-full lg:w-auto flex justify-center lg:justify-start mb-8 lg:mb-0">
        <Image
          src={myPic}
          alt="Author Pic"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-mainColor rounded-full shadow-custom"
        />
      </div>
      <div className="w-full lg:w-1/2 h-max text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mainColor mb-1">
          About Me!
        </h1>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-mainColor mb-5">
          Frontend Developer
        </h3>
        <p className="text-lg md:text-xl text-textColor">
          I am a dedicated frontend developer from Pakistan, passionate about
          creating intuitive and dynamic user interfaces. Proficient in HTML,
          CSS, and JavaScript, I strive to deliver high-quality, responsive
          websites. I enjoy learning new technologies and improving my skills to
          provide exceptional user experiences.
        </p>
      </div>
    </section>
  );
}
