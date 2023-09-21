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
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function HeroSection() {
  return (
    <div className="main-jokefi">
      <div>
        <Row justify="center">
          <Col xxl={5} xl={8} lg={10} md={11}>
            <div className="center-joke-col1">
              <div className="margin-hero">
                <img src={joke} alt="" className="siz-joke" />
                <img src={fi} alt="" className="siz-joke1" />
                <div>
                  <img src={react} alt="" className="siz-joke2" />
                  <img src={react1} alt="" className="siz-joke2" />
                </div>
                <img />
              </div>
            </div>
          </Col>
          <Col xxl={5} xl={8} lg={10} md={11}>
            <div className="center-joke-col">
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
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeroSection;
