import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import team1 from "../../images/Group 11.png";
import team2 from "../../images/Group 10.png";
import team3 from "../../images/Group 12.png";
import team4 from "../../images/Group 13.png";
import team5 from "../../images/Group 15.png";
import team6 from "../../images/Group 16.png";
import team7 from "../../images/Group 17.png";
import team8 from "../../images/Group 14.png";
import { Container } from "react-bootstrap";

const data = [
  { img: <img src={team1} alt="" className="img-size-team" />, name: "Joe" },
  { img: <img src={team2} alt="" className="img-size-team" />, name: "Joe" },
  { img: <img src={team3} alt="" className="img-size-team" />, name: "Joe" },
  { img: <img src={team4} alt="" className="img-size-team" />, name: "Joe" },
  { img: <img src={team5} alt="" className="img-size-team" />, name: "Joe" },
  { img: <img src={team6} alt="" className="img-size-team" />, name: "Joe" },
  { img: <img src={team7} alt="" className="img-size-team" />, name: "Joe" },
  { img: <img src={team8} alt="" className="img-size-team" />, name: "Joe" },
];
function Team() {
  return (
    <div className="main-team">
      <div>
        <p className="team-text">Team</p>
        <div className="main-bg-team">
          <Container>
            <Row justify="center">
              {data.map((item) => (
                <Col lg={6} md={6} xs={8}>
                  <div className="center-team">
                    {/* <div className="div-team"> */}
                    <div>{item.img}</div>
                    {/* </div> */}
                    <p className="team-text1 ">{item.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Team;
