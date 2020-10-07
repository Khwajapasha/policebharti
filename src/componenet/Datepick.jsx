import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form, Col, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";

const Datepick = () => {
  const [data, setData] = useState(new Date());
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      MiddleName: "",
      LastName: "",
    },
    onSubmit: (values) => {
      console.log("Form.data", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.FirstName) {
        errors.FirstName = "First Name Is Required";
      }
      if (!values.MiddleName) {
        errors.MiddleName = "Middle Name Is Required";
      }
      if (!values.LastName) {
        errors.LastName = "Last Name Is Required";
      }
    },
  });
  console.log("Visited field", formik.touched);
  return (
    <div>
      <h1 className="text-center">Police Bharti Application Form 2025</h1>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="FirstName">
              <Form.Control
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.FirstName}
              />
              {formik.touched.FirstName && formik.errors.FirstName ? (
                <div>{formik.errors.FirstName}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} controlId="MiddleName">
              <Form.Control
                id="MiddleName"
                placeholder="Middle Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.MiddleName}
              />
              {formik.touched.middleName && formik.errors.MiddleName ? (
                <div>{formik.errors.MiddleName}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} controlId="LastName">
              <Form.Control
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.LastName}
              />
              {formik.touched.LastName && formik.errors.LastName ? (
                <div>{formik.errors.LastName}</div>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="MobileNumber">
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
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Control placeholder="Age as on 1st January 2020" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridreligion">
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
              <Form.Control as="select">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNationality">
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {"  "}
          <Button variant="primary">Cancel</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Datepick;
