import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../../configs/redux/selectors";
import { tasksAction } from "../../configs/redux/actions";

function Search() {
  const dispatch = useDispatch();
  const search = useSelector(tasksSelector.getSearch);
  let handleSearch = (event) => {
    dispatch(tasksAction.searchTask(event.target.value));
  };
  return (
    <InputGroup>
      <Form.Control
        name="search"
        type="text"
        placeholder="Insert keyword..."
        value={search}
        onChange={handleSearch}
      ></Form.Control>
    </InputGroup>
  );
}

export default Search;
