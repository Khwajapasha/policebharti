import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form, Col, Button, Container } from "react-bootstrap";
import { string as yupString, object as yupObject } from "yup";
import { useFormik } from "formik";

const Home = () => {
  const [data, setData] = useState(new Date());
  // const [MiddleName, setMiddleName] = useState("");
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

  const validationSchema = yupObject().shape({
    firstName: yupString().required("First Name is required"),
    middleName: yupString().required("Middle Name is required"),
  });

  const formik = useFormik({
    initialValues: {},
    validationSchema,
  });

  return (
    <div>
      <h1 className="text-center">Police Bharti Application Form 2020</h1>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Control
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={(e) =>
                  formik.setFieldValue("firstName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="middleName2">
              <Form.Control
                id="middleName"
                placeholder="Middle Name"
                value={formik.values.middleName}
                onChange={(e) =>
                  formik.setFieldValue("middleName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.middleName}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.middleName}
              </Form.Control.Feedback>
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
