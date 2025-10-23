import React, { useRef } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Indexpartner() {
  const section3Ref = useRef(null); // Create a reference for Section3

  return (
    <div>
      <Header />
      
      <Section2 section3Ref={section3Ref} /> {/* Pass the ref to Section2 */}
      
      <Section1 />
      <Section3 ref={section3Ref} /> {/* Attach ref to Section3 */}
      <Footer />
    </div>
  );
}
