import { Col, Row } from "antd";
import React from "react";
import "./style.css";
import footImage from "../../images/Subtract.png";
import footImage1 from "../../images/Vector (20).png";
import footImage2 from "../../images/Vector (21).png";

function Footer() {
  return (
    <div>
      <div className="bg-footer">
        <Row justify="center">
          <Col lg={12} md={12} xs={24}>
            <div className="center-col-footer">
              <div className="div-footimg">
                <img src={footImage1} alt="" className="footimg-size" />
                <img src={footImage2} alt="" className="footimg-size" />
                <img src={footImage} alt="" className="footimg-size" />
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} xs={24}>
            <div className="center-col-footer">
              <div>
                <p className="text-foot">From The Makers Of Shiba INU</p>
                <p className="text-foot1">All Rights Reserved Jokefi 2023</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
