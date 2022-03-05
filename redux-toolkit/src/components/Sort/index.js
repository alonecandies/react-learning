import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../../configs/redux/selectors";
import { tasksSlice } from "../../configs/redux/slices/tasks.slice";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector(tasksSelector.getSort);
  let sortOptions = ["A-Z", "Z-A", "Active", "Inactive"];

  let handleSelect = (e) => {
    dispatch(tasksSlice.actions.sortTask(e));
  };
  return (
    <DropdownButton
      variant="primary"
      type="button"
      title="Sort by"
      onSelect={handleSelect}
    >
      {sortOptions.map((option, index) => (
        <Dropdown.Item
          key={index}
          eventKey={option}
          active={sort.value && sort.by === option}
        >
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default Sort;
