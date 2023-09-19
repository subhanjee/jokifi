import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ boxShadow: "0px 11px 19px 0px #00000073" }}
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text-nvbr">
              Home{" "}
            </Nav.Link>
            <Nav.Link href="#features" className="text-nvbr">
              |{" "}
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-nvbr">
              About
            </Nav.Link>
            <Nav.Link href="#features" className="text-nvbr">
              |{" "}
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-nvbr">
              Roadmap
            </Nav.Link>
            <Nav.Link href="#features" className="text-nvbr">
              |{" "}
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-nvbr">
              Tokenomics
            </Nav.Link>
            <Nav.Link href="#features" className="text-nvbr">
              |{" "}
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-nvbr">
              Contact
            </Nav.Link>
            <Nav.Link className="center-btn">
              <button className="wallet-btn">Wallet Connect</button>
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
