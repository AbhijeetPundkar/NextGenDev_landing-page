import React from "react";
import Navbar from "./Navbar/page";
import FirstSection from "./FirstSection/page";
import SecondSection from "./SecondSection/page";
import Carousel from "@/components/Logos";
import ThirdSection from "./ThirdSection/page";
import Pricing from "./pricing/page";
import Footer from "./Footer/page";
import FourthSection from "./FourthSection/page";
import FifthSection from "./FifthSection/page";

export default function page() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Carousel />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Pricing />
      <FifthSection />
      <Footer />
    </div>
  );
}
