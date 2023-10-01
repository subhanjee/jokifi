import { Col, Row, Form, Input } from "antd";
import React from "react";
import "./style.css";
import airImge from "../../images/image 20 (2).png";
import airImge1 from "../../images/image 21 (1).png";
import airImge2 from "../../images/Ellipse 16 (1).png";
import airImge3 from "../../images/Ellipse 14.png";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Airdrop() {
  return (
    <div className="main-divvv">
      <Row justify="center">
        <Col xxl={8} xl={8}>
          <div className="center-col-air1">
            <img src={airImge2} alt="" className="air-pos-air" />
            <img src={airImge3} alt="" className="air-pos-air345" />
            <div className="div-airr">
              <p className="text-air ">Airdrop Whitelist</p>
              <p className="text-air1 ">
                We’re giving away $50,000 worth of $WSM tokens split between
                <br /> 5 lucky degens in a very generous Wall Street Memes
                airdrop.
                <br /> Enter below and make sure you’re in it to win it!
              </p>
              <div className="black-div-air">
                <div>
                  <p className="text-air4">0</p>
                  <p className="text-air6 ">Your Entries</p>
                </div>
                <div>
                  <p className="text-air4">54,789</p>
                  <p className="text-air6 ">Total Entries</p>
                </div>
                <div>
                  <p className="text-air4">92</p>
                  <p className="text-air6 ">Days Left</p>
                </div>
              </div>
              <p className="text-air2 ">
                Wall Street Memes <br /> $50,000 Airdrop
              </p>
              <p className="text-air3">
                🐂📈 Wall Street Memes $50,000 Airdrop Is Live Now 🐂📈{" "}
              </p>
              <p className="text-air3">
                {" "}
                ⚡️ Simply follow the steps to enter ⚡️{" "}
              </p>{" "}
              <p className="text-air3">5 x $10,000 of $WSM Is Up For Grabs!</p>
              <div className="center-air-form">
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
                    name="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <p className="text-air5">Enter Email</p>
                    <Input className="input-air" />
                  </Form.Item>
                  <Form.Item
                    name="Address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Address!",
                      },
                    ]}
                    style={{ marginTop: "-1rem" }}
                  >
                    <p className="text-air5">Enter Wallet Address</p>
                    <Input className="input-air" />
                  </Form.Item>

                  <Form.Item className="mbl-center-btn">
                    <button className="btn-sub-air " htmlType="submit">
                      Submit
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={8} xl={8}>
          <div className="center-col-air">
            <div className="center-col-air12">
              <img src={airImge1} alt="" className="img-air1" />
              <img src={airImge} alt="" className="img-air" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Airdrop;
