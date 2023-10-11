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
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  320: { items: 2 },
  375: { items: 2 },
  425: { items: 2 },
  568: { items: 3 },
  1024: { items: 4 },
  1440: { items: 4 },
  2560: { items: 5 },
};
const items = [
  <div onDragStart={handleDragStart}>
    <p className="text-land">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  <div onDragStart={handleDragStart}>
    <p className="text-land">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  <div onDragStart={handleDragStart}>
    <p className="text-land">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  <div onDragStart={handleDragStart}>
    <p className="text-land">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  <div onDragStart={handleDragStart}>
    <p className="text-land">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  <div onDragStart={handleDragStart}>
    <p className="text-land">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
  <div onDragStart={handleDragStart}>
    <p className="text-land">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit |
    </p>
  </div>,
];
function LandingPage() {
  return (
    <div>
      <br />
      <div className="flex-land">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          disableSlideInfo
          disableButtonsControls
          autoPlay
          animationDuration={2000}
          infinite
          responsive={responsive}
        />
      </div>
      <br />
      <CollapsibleExample />
      <div className="flex-land23">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
          disableSlideInfo
          disableButtonsControls
          autoPlay
          animationDuration={2000}
          infinite
          responsive={responsive}
        />
      </div>
      <HeroSection />
      <br />
      <About />
      <br />
      <br />
      <br />
      <div className="mbl-500">
        {" "}
        <br />
        <br />
      </div>
      <Tokencomics />
      <Team />
      <Airdrop />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
