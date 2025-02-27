import React from "react";
import { useAuthStore } from "../contentStore/authStore";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomeSlider from "./HomeSlider";

function Home() {
   const { user } = useAuthStore();
  return !user ? (
    <LandingPage />
  ) : (
    <div className="min-h-screen ">
      <div className=" w-full fixed opacity-70 z-30">
        <NavBar />
      </div>

      <section clas>
        <HomeSlider />
      </section>
      <section>2</section>
      <section>3</section>
      <Footer />
    </div>
  );
}

export default Home;
