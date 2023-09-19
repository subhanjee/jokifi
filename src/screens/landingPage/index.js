import React from "react";
import CollapsibleExample from "../../components/navbar";
import "./style.css";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";
import Airdrop from "../../components/airdrop";
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
      <Airdrop />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
