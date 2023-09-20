import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import team1 from "../../images/Team1.png";
import team2 from "../../images/Team2.png";
import team3 from "../../images/Team3.png";
import team4 from "../../images/Team4.png";
import team5 from "../../images/Team5.png";
import team6 from "../../images/team6.png";
import team7 from "../../images/Team7.png";
import team8 from "../../images/Team8.png";
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
        <Container>
          <div className="main-bg-team">
            <Row justify="center">
              {data.map((item) => (
                <Col lg={6} md={6} xs={12}>
                  <div className="center-team">
                    <div className="div-team">
                      <div>{item.img}</div>
                    </div>
                    <p className="team-text1 ">{item.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Team;
