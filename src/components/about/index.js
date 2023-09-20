import React from "react";
import "./style.css";
import { Col, Row } from "antd";
function About() {
  return (
    <div className="main-about">
      <div>
        <p className="text-about">About</p>
        <p className="text1-about">We Meme Business!</p>
        <div className="bg-about">
          <Row>
            <Col>
              <div>
                <div></div>
              </div>
            </Col>
            <Col>
              <div>
                <div></div>
              </div>
            </Col>
            <Col>
              <div>
                <div></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;
