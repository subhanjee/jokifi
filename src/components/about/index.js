import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import qout from "../../images/Union (1).png";
import random from "../../images/Group 7.png";
import random1 from "../../images/Vector (22).png";
import random2 from "../../images/image 15 (2).png";
import random3 from "../../images/image 15 (3).png";
import random4 from "../../images/image 14.png";
import random5 from "../../images/Vector (28).png";
import random6 from "../../images/image 10.png";
function About() {
  return (
    <div className="main-about">
      <div>
        <p className="text-about">About</p>
        <p className="text1-about">We Meme Business!</p>
        <div className="bg-about">
          <Row justify="center">
            <Col>
              <div className="center-col-about">
                <div>
                  <img src={qout} alt="" className="qout-size" />
                  <div className="pos-comm-text">
                    <p className="text-about-m">1 M+</p>
                    <p className="text-about-m1">Community</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="center-col-about">
                <div>
                  <img src={qout} alt="" className="qout-size" />
                  <div className="pos-comm-text">
                    <p className="text-about-m">40 M+</p>
                    <p className="text-about-m1">Impressions</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="center-col-about11">
                <div>
                  <img src={qout} alt="" className="qout-size" />
                  <div className="pos-comm-text1">
                    <p className="text-about-m">Unlimited</p>
                    <p className="text-about-m1">Memes</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="center-col-about">
            <div className="div-road">
              <p className="text-about-m">Roadmap</p>
              <div className="div-pos-road">
                <p className="text-about-m">Q3 2023</p>
                <p className="text-about-m2">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor
                  <br /> incididunt ut
                </p>
                <img src={random5} alt="" className="pos-vec-roadmbl" />
              </div>
              <div className="div-pos-road1">
                <p className="text-about-m">Q3 2023</p>
                <p className="text-about-m2">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor
                  <br /> incididunt ut
                </p>
                <img src={random2} alt="" className="pos-vec-road1" />
              </div>
              <div className="div-pos-road2">
                <p className="text-about-m">Q3 2023</p>
                <p className="text-about-m2">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor
                  <br /> incididunt ut
                </p>
                <img src={random1} alt="" className="pos-vec-road" />
                <img src={random3} alt="" className="pos-vec-road2" />
                <img src={random6} alt="" className="pos-vec-roadmbl1" />
              </div>
              <div className="div-pos-road3">
                <p className="text-about-m">Q3 2023</p>
                <p className="text-about-m2">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor
                  <br /> incididunt ut
                </p>
                <img src={random4} alt="" className="pos-vec-road3" />
              </div>
              <img src={random} alt="" className="img-rand-size" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
