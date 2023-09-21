import React from "react";
import "./style.css";
import { Col, Row, Progress, Form, Input } from "antd";
import joke from "../../images/Joke.png";
import fi from "../../images/FI.png";
import react from "../../images/Rectangle 25.png";
import react1 from "../../images/Rectangle 24.png";
import react2 from "../../images/Vector (23).png";
import coin from "../../images/Vector (24).png";
import coin1 from "../../images/Vector (25).png";
import coin2 from "../../images/Vector (26).png";
import image from "../../images/image 3.png";
import Timer from "../timer";
import cloud from "../../images/Yuppies Doodle Cloud 2.png";
import immm from "../../images/image 4.png";
import immm1 from "../../images/image 8.png";
import immm2 from "../../images/image 10.png";
import immm3 from "../../images/Vector (27).png";
import immm4 from "../../images/Yuppies Black Lighting.png";
import immm5 from "../../images/Yuppies Cat.png";
import immm6 from "../../images/image 9.png";
import immm7 from "../../images/image 11.png";
import immm8 from "../../images/Yuppies Doodle Cloud 3.png";
import immm9 from "../../images/Yuppies Clock.png";
import immm10 from "../../images/Yuppies Doodle Cloud 4.png";
import immm11 from "../../images/Yuppies Doodle Cloud 5.png";
import immm12 from "../../images/Yuppies Doodle Cloud 1.png";
import immm13 from "../../images/Ellipse 5.png";
import immm14 from "../../images/Ellipse 10 (1).png";
import immm15 from "../../images/Ellipse 1.png";
import immm16 from "../../images/Ellipse 7.png";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function HeroSection() {
  return (
    <div className="main-jokefi">
      <img src={cloud} className="cloud-img" />
      <div>
        <Row justify="center">
          <Col xxl={5} xl={8} lg={10} md={11}>
            <div className="center-joke-col1">
              <img src={immm8} alt="" className="imm-pos8" />
              <img src={immm9} alt="" className="imm-pos9" />
              <img src={immm10} alt="" className="imm-pos10" />
              <img src={immm} alt="" className="imm-pos" />
              <img src={immm1} alt="" className="imm-pos1" />
              <img src={immm13} alt="" className="imm-pos13" />
              <div className="margin-hero">
                <img src={joke} alt="" className="siz-joke" />
                <img src={fi} alt="" className="siz-joke1" />
                <div>
                  <img src={react} alt="" className="siz-joke2" />
                  <img src={react1} alt="" className="siz-joke2" />
                </div>
                <img src={immm2} alt="" className="imm-pos2" />
                <img src={immm14} alt="" className="imm-pos14" />
                <img src={immm3} alt="" className="imm-pos3" />
              </div>
            </div>
          </Col>
          <img src={immm15} alt="" className="imm-pos15" />
          <Col xxl={5} xl={8} lg={10} md={11}>
            <div className="center-joke-col">
              <img src={immm4} alt="" className="imm-pos4" />
              <img src={immm5} alt="" className="imm-pos5" />
              <img src={immm11} alt="" className="imm-pos11" />
              <img src={immm12} alt="" className="imm-pos12" />
              <img src={immm16} alt="" className="imm-pos16" />

              <img />
              <div className="div-timer">
                <Timer />
                <div className="center-proo">
                  <img src={react2} alt="" className="pro-pos" />
                  <Progress
                    percent={50}
                    status="active"
                    strokeColor="#00FF66"
                    size="default"
                  />
                </div>
                <p className="usdt-hero-text">
                  USDT Raised:
                  <br />
                  $17,505,663.19 / $18,004,966.16{" "}
                </p>
                <div className="main-coin-div">
                  <div className="main-coin-div1">
                    <div className="coin-div">
                      <img src={coin} alt="" style={{ marginRight: ".5rem" }} />{" "}
                      ETH
                    </div>
                    <div className="coin-div">
                      <img
                        src={coin1}
                        alt=""
                        style={{ marginRight: ".5rem" }}
                      />{" "}
                      USDT
                    </div>
                    <div className="coin-div">
                      <img
                        src={coin2}
                        alt=""
                        style={{ marginRight: ".5rem" }}
                      />{" "}
                      Card
                    </div>
                  </div>
                </div>
                <br />
                <div className="flex-form-img">
                  <div>
                    <Form
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <p className="text-heroeth ">ETH you pay</p>
                        <Input className="input-hero" />
                      </Form.Item>
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <p className="text-heroeth ">JKFI You Get</p>
                        <Input className="input-hero" />
                      </Form.Item>
                      <div className="flex-btn">
                        <Form.Item>
                          <button
                            type="primary"
                            htmlType="submit"
                            className="hero-btn"
                          >
                            Buy Now!
                          </button>
                        </Form.Item>
                        <Form.Item>
                          <button
                            type="primary"
                            htmlType="submit"
                            className="hero-btn1"
                          >
                            Buy with BNB
                          </button>
                        </Form.Item>
                      </div>
                    </Form>
                    <p className="how-text-hero">How To Buy</p>
                  </div>
                  <div>
                    <img src={image} alt="" className="size-img-herrr" />
                  </div>
                </div>
              </div>
              <img src={immm6} alt="" className="imm-pos6" />
              <img src={immm7} alt="" className="imm-pos7" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeroSection;
