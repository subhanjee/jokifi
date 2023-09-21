import React from "react";
import CollapsibleExample from "../../components/navbar";
import "./style.css";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";
import Airdrop from "../../components/airdrop";
import Team from "../../components/team";
import Tokencomics from "../../components/tokencomics";
import About from "../../components/about";
import HeroSection from "../../components/heroSection";
function LandingPage() {
  return (
    <div>
      <br />
      <div className="flex-land">
        <div className="flex-land1">
          <p className="text-land">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit |
          </p>
          <p className="text-land">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit |
          </p>
          <p className="text-land">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit |
          </p>
          <p className="text-land">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit |
          </p>
          <p className="text-land">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit |
          </p>
        </div>
      </div>
      <br />
      <CollapsibleExample />
      <HeroSection />
      <About />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tokencomics />
      <Team />
      <Airdrop />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
