// import React from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { Form, Col, Button, Container } from "react-bootstrap";
const Home = () => {
  const [data, setData] = useState(new Date());
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Age, setAge] = useState("");
  const [Religion, setReligion] = useState("");
  const [SelectHeight, setSelectHeight] = useState("");
  const [SelectChest, setSelectChest] = useState("");
  const [Gender, setGender] = useState("");
  const [Nationality, setNationality] = useState("");
  const [PermanantAddress, setPermanantAddress] = useState("");
  const [TemporaryAddress, setTemporaryAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [CheckBox, setCheckBox] = useState("");
  const [OnClickButton, setOnClickButton] = useState("");
  const [CancelButton, setCancelButton] = useState("");

  return (
    <div>
      <h1 className="text-center">Police Bharti Application Form 2020</h1>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Control
                placeholder="First Name"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="middlename">
              <Form.Control
                placeholder="Middle Name"
                value={MiddleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
              <Form.Control
                placeholder="Last Name"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={EmailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="MobileNumber">
              <Form.Control
                placeholder="Mobile Number"
                value={MobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
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
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Control
                placeholder="Age as on 1st January 2020"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridreligion">
              <Form.Control
                as="select"
                defaultValue="State"
                value={Religion}
                onChange={(e) => setReligion(e.target.value)}
              >
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
              <Form.Control
                placeholder="Hieght in cm"
                value={SelectHeight}
                onChange={(e) => setSelectHeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridChest">
              <Form.Control
                placeholder="Chest in cm"
                value={SelectChest}
                onChange={(e) => setSelectChest(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Control
                as="select"
                defaultValue="Gender"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNationality">
              <Form.Control
                as="select"
                value={Nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option>Nationality(Only For Indian)</option>
                <option>Indian</option>
                <option>Other </option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Control
              placeholder="Permanant Address"
              value={PermanantAddress}
              onChange={(e) => setPermanantAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Control
              placeholder="Temporary Address"
              value={TemporaryAddress}
              onChange={(e) => setTemporaryAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control
                placeholder="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                as="select"
                defaultValue="State"
                value={State}
                onChange={(e) => setState(e.target.value)}
              >
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
              <Form.Control
                placeholder="PinCode"
                value={PinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Accept"
              value={CheckBox}
              onChange={(e) => setCheckBox(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            value={OnClickButton}
            onClick={(e) => setOnClickButton(e.target.value)}
          >
            Submit
          </Button>
          {"  "}
          <Button
            variant="primary"
            value={CancelButton}
            onClick={(e) => setCancelButton(e.target.value)}
          >
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Home;
