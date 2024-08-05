import React from "react";

const Filter = ({
  filterText,
  setFilterText,
  filterRating,
  setFilterRating,
}) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Filter by title"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
    <input
      type="number"
      placeholder="Filter by rating"
      value={filterRating}
      onChange={(e) => setFilterRating(e.target.value)}
    />
  </div>
);

export default Filter;
