import PropTypes from "prop-types";
import React from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function Search(props) {
  let handleSearch = () => {
    props.setSearchData(
      props.tasks.filter((task) => {
        return task.name.toLowerCase().includes(props.keyword.toLowerCase());
      })
    );
  };
  return (
    <InputGroup>
      <Form.Control
        name="keyword"
        type="text"
        placeholder="Insert keyword..."
        value={props.keyword}
        onChange={(e) => props.setKeyword(e.target.value)}
      ></Form.Control>
      <Button variant="primary" type="button" onClick={handleSearch}>
        <FaSearch></FaSearch>
      </Button>
    </InputGroup>
  );
}

Search.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  keyword: PropTypes.string,
  setKeyword: PropTypes.func,
  setSearchData: PropTypes.func,
};

export default Search;
