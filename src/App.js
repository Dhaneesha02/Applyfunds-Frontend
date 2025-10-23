import React, { useRef } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Indexaboutus from './Components/Aboutus/Indexaboutus';
import Indexadmin from './Components/Adminpage/Indexadmin';
import IndexbuisnessLoan from './Components/BuisnessLoan/Indexbuisnessloan';
import IndexBuisnessform from './Components/Buisnessloanform/IndexBuisnessform';
import Indexcareers from './Components/Careers/Indexcareers';
import IndexContactus from './Components/Contactus/IndexContactus';
import IndexCustomerLogin from './Components/CustomerLogin/IndexCustomerLogin';
import IndexHome from './Components/Home/IndexHome';
import Indexhomeloan from './Components/HomeLoan/Indexhomeloan';
import IndexHomeloanform from './Components/HomeLoanform/IndexHomeloanform';
import IndexInsurance from './Components/Insurance/IndexInsurance';
import Indexloan from './Components/Loanagainst/Indexloan';
import IndexLoanform from './Components/LoanForm/IndexLoanform';
import Indexlogin from './Components/Login/Indexlogin';
import Indexpartner from './Components/Our Partners/Indexpartner';
import IndexPersonalform from './Components/PersonalForm/IndexPersonalform';
import IndexPersonalLoan from './Components/PersonalLoan/IndexPersonalLoan';
import IndexPopup from './Components/Popup/IndexPopup';
import Indexscams from './Components/Scams/Indexscams';
import ScrollTop from './Components/scroll/ScrollTop';
import ScrollToTopButton from './Components/scrolltotop/ScrollToTop';

export default function App() {
  // Create references for sections
  const sectionRefs = {
    section3: useRef(null),
    section6: useRef(null),
    section9: useRef(null),
    section11: useRef(null),
    section2: useRef(null),
    section4: useRef(null),
  };

  // Optimized function to scroll to a specific section
  const scrollToSection = (section) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <BrowserRouter basename="/">
        <ScrollTop />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <IndexHome
                scrollToSection={scrollToSection}
                section3Ref={sectionRefs.section3}
                section6Ref={sectionRefs.section6}
              />
            }
          />

          {/* Home Loan Page */}
          <Route
            path="/home-loan"
            element={
              <Indexhomeloan
                scrollToSection={scrollToSection}
                section9Ref={sectionRefs.section9}
                section11Ref={sectionRefs.section11}
              />
            }
          />

          {/* Contact Page */}
          <Route path="/contact" element={<IndexContactus />} />

          {/* Personal Loan Page (Fixed ref issue) */}
          <Route
            path="/personal-loan"
            element={
              <IndexPersonalLoan
                scrollToSection={scrollToSection}
                section2Ref={sectionRefs.section2}
                section4Ref={sectionRefs.section4}
              />
            }
          />
          <Route
            path="/buisness-loan"
            element={
              <IndexbuisnessLoan
                scrollToSection={scrollToSection}
                section2Ref={sectionRefs.section2}
                section4Ref={sectionRefs.section4}
              />
            }
          />
          <Route
            path="/loan-against"
            element={
              <Indexloan
                scrollToSection={scrollToSection}
                section2Ref={sectionRefs.section2}
                section4Ref={sectionRefs.section4}
              />
            }
          />
          <Route path="/about-us" element={<Indexaboutus />} />
          <Route path="/our-partners" element={<Indexpartner />} />
          <Route path="/login" element={<Indexlogin />} />
          <Route path="/customer-login" element={<IndexCustomerLogin />} />
    
          <Route path="/home-loan-form" element={<IndexHomeloanform />} />
          <Route path="/personal-loan-form" element={<IndexPersonalform />} />
          <Route path="/loan-form" element={<IndexLoanform />} />
          <Route path="/buisness-form" element={<IndexBuisnessform />} />
          <Route path="/insurance" element={<IndexInsurance />} />
          <Route path="/admin" element={<Indexadmin />} />
          <Route path="/careers" element={<Indexcareers />} />
          <Route path="/scams" element={<Indexscams />} />
        </Routes>

        <ScrollToTopButton />

        <IndexPopup />
      </BrowserRouter>
    </div>
  );
}
