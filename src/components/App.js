import React, { useState } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import "./App.css";
import Video from './Video'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function App() {
  const [search, setSearch] = useState('')
  const [child, setChild] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    setChild(search)
  }
  return (
    <Container>
      <Row>
        <Col>
        <Form onSubmit={e => onSubmit(e)} >
          <Form.Row className="search-box">
            <Col xs={12} md={2} style={{ margin: "auto" }}>
              <img src= {require("../watchit.png")}  alt="watch it logo" width="100px" style={{ margin: "auto"}}/>
              </Col>
              <Col md={7} xs={9}>
            <Form.Control 
              className="form"
              size="lg" 
              type="text" 
              placeholder="Search Video Here..." 
              onChange={e => setSearch(e.target.value)} 
              />
            </Col>
            <Col>
            <Button 
              className="search-btn"
              onClick={(e) => onSubmit(e)}  
              variant="primary" 
              size="lg">Get Video</Button>
            </Col>
          </Form.Row>
        </Form>
        </Col>
      </Row>
      <Row>
       <Video search={child} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
