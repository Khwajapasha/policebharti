import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import "./App.css";
import Home from "./componenet/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <div className="align-item:center">
      <Home />
    </div>
  );
}

export default App;
