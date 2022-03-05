import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Form } from "react-bootstrap";

function FormTest(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    description: "",
    gender: 0,
    lang: "vi",
    status: true,
  });

  let handleOnChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  let handleOnSubmit = (event) => {
    event.preventDefault();
  };

  let handleOnReset = () => {
    setUser({
      username: "",
      password: "",
      description: "",
    });
  };

  return (
    <>
      <Form
        onSubmit={handleOnSubmit}
        onReset={handleOnReset}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          textAlign: "center",
        }}
        className="mt-4 ms-5"
      >
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={handleOnChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleOnChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          value={user.description}
          onChange={handleOnChange}
          rows={7}
        />
        <label>Gender</label>
        <select name="gender" value={user.gender} onChange={handleOnChange}>
          <option value={0}>Male</option>
          <option value={1}>Female</option>
        </select>
        <label>
          <input
            type="radio"
            name="lang"
            value="vi"
            onChange={handleOnChange}
            checked={user.lang === "vi"}
          />
          vi
        </label>
        <label>
          <input
            type="radio"
            name="lang"
            value="en"
            onChange={handleOnChange}
            checked={user.lang === "en"}
          />
          en
        </label>
        <label>
          <input
            type="checkbox"
            name="status"
            defaultChecked={user.status}
            onChange={handleOnChange}
          />
          Status
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </Form>
    </>
  );
}

FormTest.propTypes = {};

export default FormTest;
