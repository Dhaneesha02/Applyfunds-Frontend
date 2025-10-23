// import React, { forwardRef } from "react";
// // import Header2 from "./Header2";
// import Header from "../Home/Header";
// import Section1 from "./Section1";
// import Section2 from "./Section2";
// import Section6 from "./Section6";
// import Section3 from "./Section3";
// import Section5 from "./Section5";
// import Section4 from "./Section4";
// // import { Section7 } from "../Home/Section7";
// import Faq from "./Faq";
// import Footer from "../Home/Footer";

// const IndexPersonalLoan = forwardRef(
//   ({ scrollToSection, section2Ref, section4Ref }, ref) => {
//     return (
//       <div>
//         {/* <Header2
//           scrollToSection={scrollToSection}
//           section2Ref={section2Ref}
//         section4Ref={section4Ref}
//         /> */}
//         <Header />
//         <Section1 scrollToSection={scrollToSection} />
//         <Section6 />
//         <Section2 ref={section2Ref} /> {/* Pass ref correctly */}
//         <Section3 />
//         <Section5 />
//         <Section4 ref={section4Ref} /> {/* Pass ref correctly */}
//         {/* <Section7 /> */}
//         <Faq />
//         <Footer />
//       </div>
//     );
//   }
// );

// export default IndexPersonalLoan;


import React, { useEffect, forwardRef } from "react";
import Header from "../Home/Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section6 from "./Section6";
import Section3 from "./Section3";
import Section5 from "./Section5";
import Section4 from "./Section4";
import Faq from "./Faq";
import Footer from "../Home/Footer";

const IndexPersonalLoan = forwardRef(
  ({ scrollToSection, section2Ref, section4Ref }, ref) => {
    
    // Scroll to top when the page loads
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
      <div>
        <Header />
        <Section1 scrollToSection={scrollToSection} />
        <Section6 />
        <Section2 ref={section2Ref} />
        <Section3 />
        <Section5 />
        <Section4 ref={section4Ref} />
        <Faq />
        <Footer />
      </div>
    );
  }
);

export default IndexPersonalLoan;
