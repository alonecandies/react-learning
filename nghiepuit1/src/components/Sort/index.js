import PropTypes from "prop-types";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Sort(props) {
  let sortOptions = ["A-Z", "Z-A", "Active", "Inactive"];

  let handleSelect = (e) => {
    let newSort = {
      by: e,
      value: 1
    };
    props.setSorting(newSort);
    let newSearchData = props.searchData.sort((a, b) => {
      if (e==="A-Z"){
        return a.name.localeCompare(b.name);
      }
      if (e==="Z-A"){
        return b.name.localeCompare(a.name);
      }
      return 0;
    })
    if (e==="Active") {
      newSearchData = newSearchData.filter(task => task.status==="active");
      newSearchData.push(...props.searchData.filter(task => task.status==="inactive"));
    }
    if (e==="Inactive") {
      newSearchData = newSearchData.filter(task => task.status==="inactive");
      newSearchData.push(...props.searchData.filter(task => task.status==="active"));
    }
    props.setSearchData(newSearchData);
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
          active={props.sorting.value&&props.sorting.by === option}
        >
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

Sort.propTypes = {
  sorting: PropTypes.object,
  setSorting: PropTypes.func,
  searchData: PropTypes.array,
  setSearchData: PropTypes.func,
};

export default Sort;
