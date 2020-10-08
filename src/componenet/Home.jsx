import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form, Col, Button, Container } from "react-bootstrap";
import { string as yupString, object as yupObject } from "yup";
import { useFormik } from "formik";

const Home = () => {
  const [data, setData] = useState(new Date());
  //const [LastName, setLastName] = useState("");
  const [EmailId, setEmailId] = useState("");
  // const [MobileNumber, setMobileNumber] = useState("");
  // const [Age, setAge] = useState("");
  const [Religion, setReligion] = useState("");
  // const [SelectHeight, setSelectHeight] = useState("");
  // const [SelectChest, setSelectChest] = useState("");
  const [Gender, setGender] = useState("");
  const [Nationality, setNationality] = useState("");
  // const [PermanantAddress, setPermanantAddress] = useState("");
  const [TemporaryAddress, setTemporaryAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [CheckBox, setCheckBox] = useState("");
  const [OnClickButton, setOnClickButton] = useState("");
  const [CancelButton, setCancelButton] = useState("");

  const validationSchema = yupObject().shape({
    FirstName: yupString()
      .min(3, "Too short")
      .max(20, "Too long")
      .required("First name is required"),
    MiddleName: yupString()
      .max(20, "Too long")
      .required("Middle name is required"),
    LastName: yupString()
      .min(3, "Too short")

      .required("Last name is required"),
    MobileNumber: yupString()
      .min(10, "Enter valid mobile number")
      .required("Last name is required"),
    Age: yupString().min(2, "Enter valid age").required("Age is required"),
    Height: yupString()
      .min(3, "Enter Height in centemeter")
      .required("Height is required"),
    Chest: yupString()
      .min(2, "Enter Chest in centemeter")
      .required("Chest is required"),
    Address1: yupString().required("Permenant address is required"),
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
            <Form.Group as={Col} controlId="FirstName">
              <Form.Control
                placeholder="First Name"
                value={formik.values.FirstName}
                maxLength={20}
                onChange={(e) =>
                  formik.setFieldValue("FirstName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.FirstName && formik.errors.FirstName}
              />
              {formik.touched.FirstName && formik.errors.FirstName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.FirstName}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="MiddleName">
              <Form.Control
                placeholder="Middle Name"
                value={formik.values.MiddleName}
                maxLength={20}
                onChange={(e) =>
                  formik.setFieldValue("MiddleName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.MiddleName && formik.errors.MiddleName
                }
              />
              {formik.touched.MiddleName && formik.errors.MiddleName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.MiddleName}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="LastName">
              <Form.Control
                placeholder="Last Name"
                value={formik.values.LastName}
                maxLength={20}
                onChange={(e) =>
                  formik.setFieldValue("LastName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.LastName && formik.errors.LastName}
              />
              {formik.touched.LastName && formik.errors.LastName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.LastName}
                </Form.Control.Feedback>
              )}
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
                value={formik.values.MobileNumber}
                maxLength={13}
                onChange={(e) =>
                  formik.setFieldValue("MobileNumber", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.MobileNumber && formik.errors.MobileNumber
                }
              />
              {formik.touched.MobileNumber && formik.errors.MobileNumber && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.MobileNumber}
                </Form.Control.Feedback>
              )}
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
            <Form.Group as={Col} controlId="Age">
              <Form.Control
                placeholder="Age as on 1st January 2020"
                value={formik.values.Age}
                maxLength={2}
                onChange={(e) => formik.setFieldValue("Age", e.target.value)}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Age && formik.errors.Age}
              />
              {formik.touched.Age && formik.errors.Age && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Age}
                </Form.Control.Feedback>
              )}
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
            <Form.Group as={Col} controlId="Height">
              <Form.Control
                placeholder="Height in cm"
                value={formik.values.Height}
                maxLength={3}
                onChange={(e) => formik.setFieldValue("Height", e.target.value)}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Height && formik.errors.Height}
              />
              {formik.touched.Height && formik.errors.Height && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Height}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="Chest">
              <Form.Control
                placeholder="Chest in cm"
                value={formik.values.Chest}
                maxLength={2}
                onChange={(e) => formik.setFieldValue("Chest", e.target.value)}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Chest && formik.errors.Chest}
              />
              {formik.touched.Chest && formik.errors.Chest && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Chest}
                </Form.Control.Feedback>
              )}
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

          <Form.Group controlId="Address1">
            <Form.Control
              placeholder="Permanant Address"
              value={formik.values.Address1}
              maxLength={160}
              onChange={(e) => formik.setFieldValue("Address1", e.target.value)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.Address1 && formik.errors.Address1}
            />
            {formik.touched.Address1 && formik.errors.Address1 && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.Address1}
              </Form.Control.Feedback>
            )}
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
