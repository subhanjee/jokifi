import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import vector from "../../images/Vector 4.png";
import vector1 from "../../images/Vector 7.png";
import face from "../../images/image 15 (1).png";
import vector2 from "../../images/Vector 5.png";
import vector3 from "../../images/Ellipse 12.png";
import vector4 from "../../images/Ellipse 13.png";
function Tokencomics() {
  return (
    <div className="main-token">
      <div>
        <Row justify="center">
          <Col lg={11} xl={8} xxl={8} md={12} className="col-bg ">
            <div className="center-col-token">
              <img src={vector3} alt="" className="pos-img" />
              <div className="div-token">
                <div>
                  <p className="text-token">
                    Lorem
                    <br /> ipsum dolor
                    <br /> sit amet,{" "}
                  </p>
                  <p className="text1-token">
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit,{" "}
                  </p>
                  <p className="text1-token">
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit,{" "}
                  </p>
                </div>
                <img src={vector1} alt="" className="vect-token" />
                <img src={vector} alt="" className="vect-token1" />
                <div>
                  {" "}
                  <p className="text-token">
                    Lorem
                    <br /> ipsum dolor
                    <br /> sit amet,{" "}
                  </p>
                  <p className="text1-token">
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit,{" "}
                  </p>
                  <p className="text1-token">
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit,{" "}
                  </p>
                </div>
                <img src={vector1} alt="" className="vect-token" />
                <img src={vector} alt="" className="vect-token2" />
                <div>
                  {" "}
                  <p className="text-token">
                    Lorem
                    <br /> ipsum dolor
                    <br /> sit amet,{" "}
                  </p>
                  <p className="text1-token">
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit,{" "}
                  </p>
                  <p className="text1-token">
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit,{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={11} xl={10} xxl={8} md={12}>
            <div className="center-col-token1">
              <img src={vector4} alt="" className="pos-img1-tokrr" />
              <div className="div-tokn-percent">
                <div>
                  <p className="tokis-text">Tokencomics</p>
                  <img src={face} alt="" className="tok-img" />
                </div>
                <div className="div-token-bit">
                  <p className="tokis-text1">45% Lorem ipsum</p>
                  <img src={vector2} alt="" className="size-vec" />
                  <div className="pink-div"></div>
                </div>
                <div className="div-token-bit">
                  <p className="tokis-text1">35% Lorem ipsum</p>
                  <img src={vector2} alt="" className="size-vec" />
                  <div className="pink1-div"></div>
                </div>
                <div className="div-token-bit">
                  <p className="tokis-text1">25% Lorem ipsum</p>
                  <img src={vector2} alt="" className="size-vec" />
                  <div className="pink2-div"></div>
                </div>
                <div className="div-token-bit">
                  <p className="tokis-text1">15% Lorem ipsum</p>
                  <img src={vector2} alt="" className="size-vec" />
                  <div className="pink3-div"></div>
                </div>
                <div className="div-token-bit">
                  <p className="tokis-text1">5% Lorem ipsum</p>
                  <img src={vector2} alt="" className="size-vec" />
                  <div className="pink4-div"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Tokencomics;
