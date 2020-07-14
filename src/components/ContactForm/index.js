import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Breed Name:</label>
        <input
          // value={props.search}
          // onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="breeds">
     
        </datalist>
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
