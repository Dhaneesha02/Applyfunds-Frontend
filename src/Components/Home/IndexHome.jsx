import React from "react";
import Header from "./Header";
import Section1 from "./Section1";
// import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
// import { Section7 } from "./Section7";
import Footer from "./Footer";

export default function IndexHome({
  scrollToSection,
  section3Ref,   
  section6Ref,
}) {
  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        section3Ref={section3Ref}
        section6Ref={section6Ref}
      />

      <Section1  scrollToSection={scrollToSection} />
      <Section4 />
      {/* <Section2 /> */}

      <Section3 ref={section3Ref} />

      
      <Section5 />

      {/* Attach section6Ref to Section6 */}
      <Section6 ref={section6Ref} />  

      {/* <Section7 /> */}
      <Footer />
    </div>
  );
}
 