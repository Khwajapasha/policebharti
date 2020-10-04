// import React from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { Form, Col, Button, Container } from "react-bootstrap";
const Home = () => {
  const [data, setData] = useState(new Date());
  return (
    <div>
      <h1 className="text-center">Police Bharti Application Form 2020</h1>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Control placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="middlename">
              <Form.Control placeholder="Middle Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Control placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Control placeholder="Mobile Number" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGridDOB">
              <Form.Label as={Col}>Date Of Birth</Form.Label>
              <DatePicker
                selected={data}
                onChange={(date) => setData(date)}
                showYearDropdown
                showMonthDropdown
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control placeholder="Age as on 1st January 2020" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="State">
                <option>Select Religion</option>
                <option>Muslim</option>
                <option>Hindu</option>
                <option>Sikh</option>
                <option>Christan</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridHieght">
              <Form.Control placeholder="Hieght in cm" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridChest">
              <Form.Control placeholder="Chest in cm" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Control as="select" defaultValue="Gender">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridChest">
              <Form.Control as="select">
                <option>Nationality(Only For Indian)</option>
                <option>Indian</option>
                <option>Other </option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Control placeholder="Permanant Address" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Control placeholder="Temporary Address" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control placeholder="City" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="State">
                <option>Select State</option>
                <option>Maharshtra</option>
                <option>Telangana</option>
                <option>Aasam</option>
                <option>Karnatak</option>
                <option>Aandhra Pardesh</option>
                <option>Himachal Pardesh</option>
                <option>Goa</option>
                <option>Rajasthan</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Control placeholder="PinCode" />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Accept" />
          </Form.Group>

          <Button variant="primary">Submit</Button>
          {"  "}
          <Button variant="primary">Cancel</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Home;
