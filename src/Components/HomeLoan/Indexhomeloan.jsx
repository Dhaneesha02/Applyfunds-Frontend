import React, { forwardRef } from "react";
// import Header1 from "./Header1";
import Header from "../Home/Header";
import Section8 from "./Section8";
import Section6 from "./Section6";

import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";
import Section14 from "./Section14";
import Faq from "../HomeLoan/Faq";
import Footer from "../Home/Footer";

const IndexHomeLoan = forwardRef(
  ({ scrollToSection, section9Ref, section11Ref }, ref) => {
    return (
      <div>
        <Header />

        <Section8 scrollToSection={scrollToSection} />
        <Section6 />

        <Section9 ref={section9Ref} />
        <Section10 />

        {/* Attach section11Ref to Section11 */}
        <Section11 ref={section11Ref} />
        <Section12 />
        <Section13 />
        <Section14 />
        <Faq />
        <Footer />
      </div>
    );
  }
);

export default IndexHomeLoan;
