import React from "react";
import { useAuthStore } from "../contentStore/authStore";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomeSlider from "./HomeSlider";
import { ArrowRight, Truck } from "lucide-react";
const steps = [
  {
    id: "01",
    title: "Step 1: Receive Package",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer.",
    image: "./step1.bmp", // Replace with actual image path
  },
  {
    id: "02",
    title: "Step 2: Transport Packages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer.",
    image: "./step2.bmp", // Replace with actual image path
  },
  {
    id: "03",
    title: "Step 3: Deliver Packages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the as integer.",
    image: "./step1.bmp", // Replace with actual image path
  },
];
function Home() {
  const { user } = useAuthStore();
  return !user ? (
    <LandingPage />
  ) : (
    <div className="min-h-screen ">
      <div className=" w-full fixed opacity-90 z-30">
        <NavBar />
      </div>
      <section>
        <HomeSlider />
      </section>

      {/* Section 2 */}

      <section className="flex flex-col md:flex-row items-center justify-between bg-[#f9f6e8] p-8 md:p-16 gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[500px] rounded-2xl overflow-hidden">
          <img
            src="./truck1.bmp"
            alt="Road Transport"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-yellow-400 p-3 rounded-lg shadow-lg">
            <Truck className="text-black" size={32} />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-black leading-tight">
            Road <br /> Transport
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris any
            nullam the as integer quam dolor nunc semper. Ornare non nulla as
            faucibus pulvinar vulputate neque. The as Suscipit tristique nam it
            enim mauris consectetur platea.
          </p>
          <button className="flex items-center bg-white border-2 border-black mt-6 px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-400 transition">
            Get In Touch
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>
      <section>
        <div className="w-full py-16 px-6">
          {/* Header */}
          <div className="text-center">
            <div className="inline-block bg-yellow-400 text-black text-sm px-4 py-1 rounded-full font-semibold">
              Our Work Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 rounded-3xl">
              <span className="bg-yellow-400 px-2  rounded-3xl">
                We always follow the best ways
              </span>
              <br />
              <span className="bg-yellow-400 px-2  rounded-3xl">of logistics</span>
            </h2>
          </div>

          {/* Steps Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12 relative">
            {/* Dotted line */}
            <div className="absolute w-3/4 h-1 top-1/2 transform -translate-y-1/2 border-dotted border-gray-400 border-t-2 left-12 hidden md:block"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Image */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Step Number */}
                  <div className="absolute -bottom-3 right-0 bg-yellow-400 text-black text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full border-2 border-white">
                    {step.id}
                  </div>
                </div>
                {/* Step Description */}
                <h3 className="text-lg font-bold mt-4">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
